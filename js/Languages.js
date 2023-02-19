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
const newsWrap1stTitleForLan = document.querySelector(".newsWrap1stTitle");
const newsWrap1stBoxForLan = document.querySelector(".newsWrap1stBox");

const newsWrap2ndTitleForLan = document.querySelector(".newsWrap2ndTitle");
const newsWrap2ndBoxForLan = document.querySelector(".newsWrap2ndBox");

const newsWrap3rdTitleForLan = document.querySelector(".newsWrap3rdTitle");
const newsWrap3rdBoxForLan = document.querySelector(".newsWrap3rdBox");

const newsWrap4thTitleForLan = document.querySelector(".newsWrap4thTitle");
const newsWrap4thBoxForLan = document.querySelector(".newsWrap4thBox");


const allNewsBtnForLan = document.querySelector(".all-news-btn");
const allGalleryBtnForLan = document.querySelector(".all-gallery-btn");

const footerHomeBtnForLan = document.querySelector(".footer-nav li:first-child a");
const footerShoppingBtnForLan = document.querySelector(".footer-nav li:nth-child(2) a");
const footerFactSheetBtnForLan = document.querySelector(".footer-nav li:nth-child(4) a");
const footerPrivacyPolicyBtnForLan = document.querySelector(".footer-nav li:nth-child(5) a");


const footerAddressForLan = document.querySelector(".footer-address")









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

    newsWrap2ndTitleForLan.textContent = languagesData[attr].newsWrap2ndTitle;
    newsWrap2ndBoxForLan.textContent = languagesData[attr].newsWrap2ndBox;
    newsWrap3rdTitleForLan.textContent = languagesData[attr].newsWrap3rdTitle;
    newsWrap3rdBoxForLan.textContent = languagesData[attr].newsWrap3rdBox;
    newsWrap4thTitleForLan.textContent = languagesData[attr].newsWrap4thTitle;
    newsWrap4thBoxForLan.textContent = languagesData[attr].newsWrap4thBox;

    allNewsBtnForLan.textContent = languagesData[attr].allNewsBtn;

    allGalleryBtnForLan.textContent = languagesData[attr].allGalleryBtn;

    footerHomeBtnForLan.textContent = languagesData[attr].footerHomeBtn;
    footerShoppingBtnForLan.textContent = languagesData[attr].footerShoppingBtn;
    footerFactSheetBtnForLan.textContent = languagesData[attr].footerFactSheetBtn;
    footerPrivacyPolicyBtnForLan.textContent = languagesData[attr].footerPrivacyPolicyBtn;

    footerAddressForLan.innerHTML = languagesData[attr].footerAddress;



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
         
         "newsWrap2ndTitle" : `National Travel Support "Kanagawa right now."`,
         "newsWrap2ndBox" : "Kaiseki Restaurant",
         "newsWrap3rdTitle" : "New Spa Opens in Summer 2022",
         "newsWrap3rdBox" : "KADAN SPA",
         "newsWrap4thTitle" : "Weekdays Wedding Anniversary Plan for Online Members",
         "newsWrap4thBox" : "GORA KADAN",

         "allNewsBtn" : "All News",

         "allGalleryBtn": "Gallery",

         "footerHomeBtn": "Home",
         "footerShoppingBtn": "KADAN Shopping",
         "footerFactSheetBtn": "Fact Sheet",
         "footerPrivacyPolicyBtn": "Privacy Policy",

         "footerAddress" : `
         1300 Gora, Hakone-machi, Ashigarashimo-gun, Kanagawa, Japan 250-0408
         <br>
         Tel: +81-460-82-3331
         <br>
         Email: info@gorakadan.com`

         


    },
    "chinese":{

        "navListStayBtn": "ke fang",
        "navListDayTripBtn": "yi ri you",
        "navListRestaurantBtn": "huai shi liao li",
        "navListNewsBtn": "gong gao",
        "navListGalleryBtn": "lv dian yi lan",
        "navListAccessBtn": "dizhi",
        "navListFacliitiesBtn": "lv guan she shi",
        "navListActivitiesBtn": "lv guan zhou wei",
        "navRoomSearchText" : "yu ding ke fang",
        "reserveBtn" : "yu ding ke fang",
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
        
        "newsWrap2ndTitle" : `National Travel Support "Kanagawa right now."`,
        "newsWrap2ndBox" : "Kaiseki Restaurant",
        "newsWrap3rdTitle" : "New Spa Opens in Summer 2022",
        "newsWrap3rdBox" : "KADAN SPA",
        "newsWrap4thTitle" : "Weekdays Wedding Anniversary Plan for Online Members",
        "newsWrap4thBox" : "GORA KADAN",

        "allNewsBtn" : "All News",

        "allGalleryBtn": "Gallery",

        "footerHomeBtn": "Home",
        "footerShoppingBtn": "KADAN Shopping",
        "footerFactSheetBtn": "Fact Sheet",
        "footerPrivacyPolicyBtn": "Privacy Policy",

        "footerAddress" : `
        1300 Gora, Hakone-machi, Ashigarashimo-gun, Kanagawa, Japan 250-0408
        <br>
        Tel: +81-460-82-3331
        <br>
        Email: info@gorakadan.com`

        


   },


   "korean":{

    "navListStayBtn": "객실",
    "navListDayTripBtn": "원데이 트립",
    "navListRestaurantBtn": "가이세키 요리",
    "navListNewsBtn": "공지",
    "navListGalleryBtn": "갤러리",
    "navListAccessBtn": "오시는 길",
    "navListFacliitiesBtn": "시설 둘러보기",
    "navListActivitiesBtn": "주변 둘러보기",
    "navRoomSearchText" : "객실 예약",
    "reserveBtn" : "예약하기",
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
    "aboutRoomBtn" : `신설 객실 별장 "아카츠키", "아케보노" 둘러보기 `,
    "staySectionTitle": "객실",
    "allRoomsBtn" : "모든 객실 보기",
    "newsSectiontitle" : "공지",
    "newsWrap1stTitle" : "[기간 한정] 풋 마지",
    "newsWrap1stBox" : "SPA",
    
    "newsWrap2ndTitle" : `전국 여행 지원 "지금 바로 카나가와로."`,
    "newsWrap2ndBox" : "카이세키 요리",
    "newsWrap3rdTitle" : "2022년 여름 신설 카단 스파 개장",
    "newsWrap3rdBox" : "카단 스파",
    "newsWrap4thTitle" : "【온라인 맴버십】평일한정 결혼 기념일 세트",
    "newsWrap4thBox" : "고라카단",

    "allNewsBtn" : "모든 공지 보기",

    "allGalleryBtn": "갤러리",

    "footerHomeBtn": "홈",
    "footerShoppingBtn": "카단 쇼핑하기",
    "footerFactSheetBtn": "팩트 시트",
    "footerPrivacyPolicyBtn": "개인보호정책",

    "footerAddress" : `
    가나가와현 아시가라시모군 하코네초 고라1300
    <br>
    연락처: +81-460-82-3331
    <br>
    이메일: info@gorakadan.com`

    


}
}