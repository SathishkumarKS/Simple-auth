export default {
  baseUrl: 'https://mysterious-reef-29460.herokuapp.com/api/v1',
  auth: [
    {
      name: 'login',
      method: 'post',
      url: '/validate'
    },
    {
      name: 'logout',
      method: 'post',
      url: '/logout'
    }
  ]
};