import { HTTP_HEADERS, HTTP_METHODS } from "./http.types";



const API_BASE_URL = process.env.REACT_APP_API_BASE_ENDPOINT;
const API_ENDPOINTS = {
  SESSION: '/session',
  AI_DIRECT: '/ai/direct',
  AI_RAG_GRAPH: '/ai/rag_graph',
}

export interface PromptResponse {
  message: string;
}

const deployed_endpoint = 'https://j5crdv65h5.execute-api.us-east-1.amazonaws.com/replica-prod/rag/'


export class APIClient {
  public static prompt(message: string): Promise<PromptResponse> {
    // check for and add token to headers
    const headers: { [key: string]: string } = {
      [HTTP_HEADERS.CONTENT_TYPE]: 'application/json',
    }
    const body: { [key: string]: string } = { message }
    // add conversation token to body if it exists
    const conversation_token = sessionStorage.getItem('conversation_token')
    if(conversation_token) {
      body['conversation'] = conversation_token
    }

    return fetch(deployed_endpoint, {
      method: HTTP_METHODS.POST,
      headers,
      credentials: 'include',
      body: JSON.stringify(body)
    }).then((resp) => {
      return resp.json();
    }).then(body => {
      // add conversation token to storage if it exists
      if (body.conversation_token) {
        sessionStorage.setItem('conversation_token', body.conversation_token)
      }

      return body
    }).catch(err => console.log(err))
  }

  // public static getSession(): Promise<any> {
  //   return fetch(`${API_BASE_URL}${API_ENDPOINTS.SESSION}`, {
  //     credentials: 'include',
  //   })
  //     .then((resp) => resp.json())
  //     .catch(err => console.log(err))
  // }
}