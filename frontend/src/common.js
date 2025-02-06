const SummaryApi = {
  signUP: {
    url: 'http://localhost:8080/api/signup',
    method: 'POST'
  },
  signIn: {
    url: 'http://localhost:8080/api/signin',
    method: 'POST'
  },
  current_user: {
    url: 'http://localhost:8080/api/current-user',
    method: 'GET'
  },
  categoryProduct: {
    url: 'http://localhost:8080/api/category-product',
    method: 'GET'
  },
  categoryWiseProduct: {
    url: 'http://localhost:8080/api/category-wise-product',
    method: 'GET'
  }
};

export default SummaryApi;
