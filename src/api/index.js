import axios from 'axios';
import requestsMap from './requestsMap';

const createRequestMap = (requests) => {
  const requestMap = {};

  requests.forEach(request => {
    requestMap[request.name] = async (payload) => {
      let response = {};

      try {
        response = await axios({
          method: request.method,
          url: `${requestsMap.baseUrl}${request.url}`,
          data: payload
        });
      } catch(error) {
        console.error('API REQUEST FAILED', error);

        throw new Error(error.message);
      }

      if (response.error) {
        throw new Error(response.error);
      } else {
        return response;
      }
    }
  })

  return requestMap;
}

export default {
  auth: createRequestMap(requestsMap.auth)
};
