const recaptchaScript = document.querySelector('script[src="https://www.gstatic.com/recaptcha/releases/SglpK98hSCn2CroR0bKRSJl5/recaptcha__vi.js"]');

if (recaptchaScript) {
  recaptchaScript.parentNode.removeChild(recaptchaScript);
}