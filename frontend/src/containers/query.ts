type Fetch = <ResponseType>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  stringfiedRequestBody?: string,
) => Promise<ResponseType>;

const clientSideFetch: Fetch = async <ResponseType>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  stringfiedRequestBody?: string,
): Promise<ResponseType> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const token = localStorage.getItem('token');
  if (token) {
    headers.append('Authorization', token);
  }

  const config: RequestInit = {
    method,
    headers,
    body: stringfiedRequestBody,
  };

  return fetch(`/api${endpoint}`, config).then((res) => res.json());
};

const serverSideFetch: Fetch = async <ResponseType>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  stringfiedRequestBody?: string,
): Promise<ResponseType> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  // TODO: server side localStorage
  // const token = localStorage.getItem('token');
  // if (token) {
  //   headers.append('Authorization', token);
  // }

  const config: RequestInit = {
    method,
    headers,
    body: stringfiedRequestBody,
  };

  return fetch(`${process.env.SERVER_SIDE_FETCH_URL}${endpoint}`, config).then(
    (res) => res.json(),
  );
};

type Method = <ResponseType>(url: string) => Promise<ResponseType>;

type MethodWithRequestBody = <ResponseType, RequestBodyType>(
  url: string,
  requestBody: RequestBodyType,
) => Promise<ResponseType>;

class Query {
  post: MethodWithRequestBody;
  get: Method;
  patch: MethodWithRequestBody;
  delete: Method;

  constructor($fetch: Fetch) {
    this.post = async <ResponseType, RequestBodyType>(
      url: string,
      requestBody: RequestBodyType,
    ): Promise<ResponseType> => {
      return $fetch<ResponseType>(url, 'POST', JSON.stringify(requestBody));
    };

    this.get = async <ResponseType>(url: string): Promise<ResponseType> => {
      return $fetch<ResponseType>(url, 'GET');
    };

    this.patch = async <ResponseType, RequestBodyType>(
      url: string,
      requestBody: RequestBodyType,
    ): Promise<ResponseType> => {
      return $fetch<ResponseType>(url, 'POST', JSON.stringify(requestBody));
    };

    this.delete = async <ResponseType>(url: string): Promise<ResponseType> => {
      return $fetch<ResponseType>(url, 'GET');
    };
  }
}

export const query = {
  clientSide: new Query(clientSideFetch),
  serverSide: new Query(serverSideFetch),
};
