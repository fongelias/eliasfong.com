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


export class APIClient {
  public static prompt(message: string): Promise<PromptResponse> {
    return fetch(`${API_BASE_URL}${API_ENDPOINTS.AI_RAG_GRAPH}`, {
      method: HTTP_METHODS.POST,
      headers: {
        [HTTP_HEADERS.CONTENT_TYPE]: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({message})
    }).then((resp) => {
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