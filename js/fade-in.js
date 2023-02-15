const aboutLogo = document.querySelector(".about-logo");

window.addEventListener("scroll", function () {
  let aboutLogoRect = aboutLogo.getBoundingClientRect();

  if (aboutLogoRect.top <= window.innerHeight) {
    aboutLogo.classList.add("fade-in-bottom")
  } 
  
});




const aboutSectionText = document.querySelector(".about-section-text");

window.addEventListener("scroll", function () {
  let fadeInTextRect = aboutSectionText.getBoundingClientRect();

  if (fadeInTextRect.top <= window.innerHeight - 150) {
    aboutSectionText.classList.add("fade-in-bottom")
  } 
  
});


const aboutRoomBtn = document.querySelector(".about-room-btn");

window.addEventListener("scroll", function () {
    let aboutRoomBtnRect = aboutRoomBtn.getBoundingClientRect();

  if (aboutRoomBtnRect.top <= window.innerHeight - 300 ) {
    aboutRoomBtn.classList.add("fade-in-bottom")
  } 
  
});



const staySection = document.querySelector(".stay-section");

window.addEventListener("scroll", function () {
    let staySectionRect = staySection.getBoundingClientRect();

  if (staySectionRect.top <= window.innerHeight - 300 ) {
    staySection.classList.add("fade-in-bottom")
  } 
  
});














const allRoomBtn = document.querySelector(".all-rooms-btn");

window.addEventListener("scroll", function () {
    let allRoomBtnRect = allRoomBtn.getBoundingClientRect();

  if (allRoomBtnRect.top <= window.innerHeight - 200 ) {
    allRoomBtn.classList.add("fade-in-bottom")
  } 
  
});









