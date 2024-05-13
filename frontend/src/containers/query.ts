const fetchClient = (requiredToken: boolean) => {
  const prepareRequest = async <T, P = undefined>(
    url: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    data?: P,
  ): Promise<T> => {
    const endpoint = `${url}`;
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (requiredToken) {
      const token = localStorage.getItem('token');
      if (token) {
        headers.append('Authorization', token);
      }
    }

    const config: RequestInit = {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    };

    if (method === 'GET') {
      delete config.body;
    }

    try {
      const response = await fetch(endpoint, config);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData: T = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(`Fetch error: ${error}`);
    }
  };

  return { prepareRequest };
};

const query = {
  post: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<T> => {
    return fetchClient(requiredToken).prepareRequest<T, P>(url, 'POST', data);
  },

  get: async <T>(requiredToken: boolean, url: string): Promise<T> => {
    return fetchClient(requiredToken).prepareRequest<T>(url, 'GET');
  },

  patch: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<T> => {
    return fetchClient(requiredToken).prepareRequest<T, P>(url, 'PATCH', data);
  },

  delete: async <T>(requiredToken: boolean, url: string): Promise<T> => {
    return fetchClient(requiredToken).prepareRequest<T>(url, 'DELETE');
  },
};

export { query };
