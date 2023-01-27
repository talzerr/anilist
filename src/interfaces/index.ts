export interface query {
  query: string;
  variables: any;
}

export interface requestOptions {
  url: string;
  method: string;
  headers: any;
  data: query;
}
