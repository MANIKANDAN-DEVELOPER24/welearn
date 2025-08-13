
// import axios from 'axios';

// const api = axios.create({
// const API_BASE :"https://welearn-backend-g57w.onrender.com/api";

//   withCredentials: true, // ✅ send cookies
//   xsrfCookieName: 'csrftoken', // ✅ Django default
//   xsrfHeaderName: 'X-CSRFToken',
// });

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: "https://welearn-backend-g57w.onrender.com/api",
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

export default api;
