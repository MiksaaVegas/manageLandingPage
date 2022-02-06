const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 40,
  slidesPerView: 3,
})
const emailInput = document.querySelector(".emailInput")
const footerSubmit = document.querySelector(".footerSubmit")
const errorMsg = document.querySelector(".error")
footerSubmit.addEventListener("click", function () {
  let enteredEmail = emailInput.value
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)) {
    errorMsg.style.opacity = "0";
  } else {
    errorMsg.style.opacity = "1";
  }
})