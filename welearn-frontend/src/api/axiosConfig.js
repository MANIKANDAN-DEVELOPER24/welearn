
// import axios from 'axios';

// const api = axios.create({
// const API_BASE :"https://welearn-backend-g57w.onrender.com/api";

//   withCredentials: true, // ✅ send cookies
//   xsrfCookieName: 'csrftoken', // ✅ Django default
//   xsrfHeaderName: 'X-CSRFToken',
// });

// export default api;
import axios from 'axios';

const API_BASE = "https://welearn-backend-g57w.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // ✅ send cookies
  xsrfCookieName: 'csrftoken', // Django default
  xsrfHeaderName: 'X-CSRFToken',
});

export default api;

