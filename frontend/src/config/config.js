const config = {
  development: {
    API_URL: 'http://localhost:5000/api'
  },
  production: {
    API_URL: 'http://localhost:5000/api'
  }
};

const environment = process.env.NODE_ENV || 'development';
export const API_BASE_URL = config[environment].API_URL; 