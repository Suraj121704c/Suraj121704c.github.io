// EmailJS Configuration
export const EMAILJS_CONFIG = {
  USER_ID: "vPAIzti0T5bbIwAUW",
  SERVICE_ID: "service_agjksqm",
  TEMPLATE_ID: "template_1dbtgea"
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    const emailjs = require('emailjs-com');
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }
}; 