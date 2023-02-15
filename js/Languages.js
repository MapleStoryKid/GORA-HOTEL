const link = document.querySelectorAll('a');
const staySectionTitleForLan = document.querySelector('.stay-section-title');
const navListStayBtnForLan = document.querySelector('#nav-list-stay-btn');
const navListDayTripBtnForLan = document.querySelector('#nav-list-dayTrip-btn');
const navListRestaurantBtnForLan = document.querySelector('#nav-list-restaurant-btn');
const navListNewsBtnForLan = document.querySelector('#nav-list-news-btn');
const navListGalleryBtnForLan = document.querySelector('#nav-list-gallery-btn');
const navListAccessBtnForLan = document.querySelector('#nav-list-access-btn');
const navListFacliitiesBtnForLan = document.querySelector('#nav-list-facilities-btn');
const navListActivitiesBtnForLan = document.querySelector('#nav-list-activities-btn');
const navRoomSearchTextForLan = document.querySelector("#nav-room-search-text");
const reserveBtnForLan = document.querySelector(".reserve-btn a");
const aboutSectionTextForLan = document.querySelector(".about-section-text");
const aboutRoomBtnForLanForLan = document.querySelector(".about-room-btn a");
const allRoomsBtnForLan = document.querySelector(".all-rooms-btn");
const newsSectiontitleForLan = document.querySelector(".news-section-title");
const newsWrap1stTitleForLan = document.querySelector(".news-wrap dl:first-child a dd");
const newsWrap1stBoxForLan = document.querySelector(".news-wrap dl:first-child a dd span");






link.forEach(el => {
el.addEventListener('click', () => {

    const attr = el.getAttribute('language');
    console.log(attr);


    navListStayBtnForLan.textContent = languagesData[attr].navListStayBtn;
    navListDayTripBtnForLan.textContent = languagesData[attr].navListDayTripBtn;
    navListRestaurantBtnForLan.textContent = languagesData[attr].navListRestaurantBtn;
    navListNewsBtnForLan.textContent = languagesData[attr].navListNewsBtn;
    navListGalleryBtnForLan.textContent = languagesData[attr].navListGalleryBtn;
    navListAccessBtnForLan.textContent = languagesData[attr].navListAccessBtn;
    navListFacliitiesBtnForLan.textContent = languagesData[attr].navListFacliitiesBtn;
    navListActivitiesBtnForLan.textContent = languagesData[attr].navListActivitiesBtn;
    navRoomSearchTextForLan.textContent = languagesData[attr].navRoomSearchText;
    reserveBtnForLan.textContent = languagesData[attr].reserveBtn;
    aboutSectionTextForLan.innerHTML = languagesData[attr].aboutSectionText;
    aboutRoomBtnForLanForLan.textContent = languagesData[attr].aboutRoomBtn;
    staySectionTitleForLan.textContent = languagesData[attr].staySectionTitle;
    allRoomsBtnForLan.textContent = languagesData[attr].allRoomsBtn;
    newsSectiontitleForLan.textContent = languagesData[attr].newsSectiontitle;
    newsWrap1stTitleForLan.textContent = languagesData[attr].newsWrap1stTitle;
    newsWrap1stBoxForLan.textContent = languagesData[attr].newsWrap1stBox;


});
});




let languagesData ={
    "english":{

         "navListStayBtn": "Stay",
         "navListDayTripBtn": "Day Trip",
         "navListRestaurantBtn": "Kaiseki Restaurant",
         "navListNewsBtn": "News",
         "navListGalleryBtn": "Gallery",
         "navListAccessBtn": "Access",
         "navListFacliitiesBtn": "Facliities",
         "navListActivitiesBtn": "Activities",
         "navRoomSearchText" : "Search",
         "reserveBtn" : "Find Room",
         "aboutSectionText" : `Gora Kadan is located on the grounds of Kan’in-no-miya Villa,
         <br class="sp-hide">
         the former summer villa of a member of the Imperial Family in the town of Gora in Hakone.
         <br>
         In this villa, which blends Japanese tradition along with modern design elements,
         <br class="sp-hide">
         we offer hot spring waters that flow freely from the source
         <br class="sp-hide">
         and an authentic kaiseki cuisine prepared with strictly selected seasonal ingredients.
         <br>
         We hope you will enjoy a blissful moment in a traditional Japanese atmosphere at Gora Kadan.`,
         "aboutRoomBtn" : "check some special rooms",
         "staySectionTitle": "Stay",
         "allRoomsBtn" : "See All Room",
         "newsSectiontitle" : "News",
         "newsWrap1stTitle" : "[Limited] Foot Massage",
         "newsWrap1stBox" : "KADAN SPA",

         


    }
}