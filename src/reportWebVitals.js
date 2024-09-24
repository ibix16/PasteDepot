import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (metric) => {
  console.log(metric);
};

if (process.env.NODE_ENV === 'production') {
  getCLS(reportWebVitals);
  getFCP(reportWebVitals);
  getFID(reportWebVitals);
  getLCP(reportWebVitals);
  getTTFB(reportWebVitals);
}

export default reportWebVitals;
