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
    const token = localStorage.getItem('jwt');
    const headers: { [key: string]: string } = {
      [HTTP_HEADERS.CONTENT_TYPE]: 'application/json',
    }
    if (token) {
      headers[HTTP_HEADERS.AUTHORIZATION] = `Bearer ${token}`
    }

    return fetch(deployed_endpoint, {
      method: HTTP_METHODS.POST,
      headers,
      credentials: 'include',
      body: JSON.stringify({message})
    }).then((resp) => {
      // check for and store token
      const token = resp.headers.get('Authorization')?.split(' ')[1];
      if (token) {
        localStorage.setItem('jwt', token);
      }
      // return resp
      return resp.json();
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