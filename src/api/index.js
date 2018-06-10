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

      if (withError(response)) {
        throw new Error(mapError(response.data.message));
      } else {
        return response;
      }
    }
  })

  return requestMap;
}

const withError = (response) => {
  if (response.data.status === 'err') {
    return true;
  }

  return false;
};

const mapError = (rawMessage) => {
  switch(rawMessage) {
    case 'wrong_email_or_password':
      return 'Email or password not valid'
    default:
      return rawMessage
  }
}

export default {
  auth: createRequestMap(requestsMap.auth)
};
