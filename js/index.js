import hamburgerMenu from "./componentes/hamburger.js";
import getAll from "./componentes/get-all.js";
import postAll from "./componentes/post-all.js";
import pauseVideo from "./componentes/pause-video.js";
import showContact from "./componentes/show-form.js";
import validateForm from "./componentes/contact-validator.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu();
  pauseVideo();
  getAll();
  postAll();
  showContact();
  validateForm();
});