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





const newsSectionTitle = document.querySelector(".news-section-title");

window.addEventListener("scroll", function () {
    let newsSectionTitleRect = newsSectionTitle.getBoundingClientRect();

  if (newsSectionTitleRect.top <= window.innerHeight - 200 ) {
    newsSectionTitle.classList.add("fade-in-bottom")
  } 
  
});





const newsWrap1st = document.querySelector(".news-wrap dl:first-child");

window.addEventListener("scroll", function () {
    let newsWrap1stRect = newsWrap1st.getBoundingClientRect();

  if (newsWrap1stRect.top <= window.innerHeight - 300 ) {
    newsWrap1st.classList.add("fade-in-bottom")
  } 

});

const newsWrap2nd = document.querySelector(".news-wrap dl:nth-child(2)");

window.addEventListener("scroll", function () {
    let newsWrap2ndRect = newsWrap2nd.getBoundingClientRect();

  if (newsWrap2ndRect.top <= window.innerHeight - 300 ) {
    newsWrap2nd.classList.add("fade-in-bottom")
  } 

});

const newsWrap3rd = document.querySelector(".news-wrap dl:nth-child(3)");

window.addEventListener("scroll", function () {
    let newsWrap3rdRect = newsWrap3rd.getBoundingClientRect();

  if (newsWrap3rdRect.top <= window.innerHeight - 300 ) {
    newsWrap3rd.classList.add("fade-in-bottom")
  } 

});

const newsWrap4th = document.querySelector(".news-wrap dl:last-child");

window.addEventListener("scroll", function () {
    let newsWrap4thRect = newsWrap4th.getBoundingClientRect();

  if (newsWrap4thRect.top <= window.innerHeight - 300 ) {
    newsWrap4th.classList.add("fade-in-bottom")
  } 

});






const allNewsBtn = document.querySelector(".all-news-btn ");

window.addEventListener("scroll", function () {
    let allNewsBtnRect = allNewsBtn.getBoundingClientRect();

  if (allNewsBtnRect.top <= window.innerHeight - 300 ) {
    allNewsBtn.classList.add("fade-in-bottom")
  } 

});


const imgForMovie = document.querySelector(".imgForMovie");

window.addEventListener("scroll", function () {
    let imgForMovieRect = imgForMovie.getBoundingClientRect();

  if (imgForMovieRect.top <= window.innerHeight - 300 ) {
    imgForMovie.classList.add("fade-in-bottom")
  } 

});


const allGalleryBtn = document.querySelector(".all-gallery-btn");

window.addEventListener("scroll", function () {
    let allGalleryBtnRect = allGalleryBtn.getBoundingClientRect();

  if (allGalleryBtnRect.top <= window.innerHeight - 300 ) {
    allGalleryBtn.classList.add("fade-in-bottom")
  } 

});





