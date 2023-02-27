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



const navSubRoomSearchForLan = document.querySelector(".nav-sub-room-search");
const navListVerticalHomeForLan = document.querySelector(".nav-list-vertical-home");
const navListVerticalStayForLan = document.querySelector(".nav-list-vertical-stay");
const navListVerticalDayTripForLan = document.querySelector(".nav-list-vertical-dayTrip");
const navListVerticalRestaurantForLan = document.querySelector(".nav-list-vertical-restaurant");
const navListVerticalNewsForLan = document.querySelector(".nav-list-vertical-news");
const navListVerticalGalleryForLan = document.querySelector(".nav-list-vertical-gallery");
const navListVerticalAccessForLan = document.querySelector(".nav-list-vertical-access");
const navListVerticalFacilitiesForLan = document.querySelector(".nav-list-vertical-facilities");
const navListVerticalActivitiesForLan = document.querySelector(".nav-list-vertical-activities");
const navListVerticalShoppingForLan = document.querySelector(".nav-list-vertical-shopping");
const navListVerticalQuestionForLan = document.querySelector(".nav-list-vertical-question");




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


const navRoomSearchBtn = document.querySelector(".nav-room-search a")




link.forEach(el => {
el.addEventListener('click', () => {

    const attr = el.getAttribute('language');
    console.log(attr);



    const allTextElements = document.querySelectorAll("body *");




    if (attr == "korean"){
        allTextElements.forEach((a) => {

            navRoomSearchBtn.style.letterSpacing = "0.2em";


        })}

    if (attr == "japanese"){
        allTextElements.forEach((a) => {
            a.style.fontFamily = "'Noto Serif JP', serif;";
            
        })}
    
    if (attr == "english"){
        allTextElements.forEach((a) => {
            navRoomSearchBtn.style.letterSpacing = "0.2em";
            
        })}
    




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


    navSubRoomSearchForLan.textContent = languagesData[attr].navSubRoomSearch;

    navListVerticalHomeForLan.textContent = languagesData[attr].navListVerticalHome;
    navListVerticalStayForLan.textContent = languagesData[attr].navListVerticalStay;
    navListVerticalDayTripForLan.textContent = languagesData[attr].navListVerticalDayTrip;

    navListVerticalRestaurantForLan.textContent = languagesData[attr].navListVerticalRestaurant;

    navListVerticalNewsForLan.textContent = languagesData[attr].navListVerticalNews;

    navListVerticalGalleryForLan.textContent = languagesData[attr].navListVerticalGallery;

    navListVerticalAccessForLan.textContent = languagesData[attr].navListVerticalAccess;

    navListVerticalFacilitiesForLan.textContent = languagesData[attr].navListVerticalFacilities;

    navListVerticalActivitiesForLan.textContent = languagesData[attr].navListVerticalActivities;
    navListVerticalShoppingForLan.textContent = languagesData[attr].navListVerticalShopping;
    navListVerticalQuestionForLan.textContent = languagesData[attr].navListVerticalQuestion;









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
    "japanese":{


        "navListStayBtn": "ご宿泊",
        "navListDayTripBtn": "日帰り",
        "navListRestaurantBtn": "懐石料理 花壇",
        "navListNewsBtn": "お知らせ",
        "navListGalleryBtn": "ギャラリー",
        "navListAccessBtn": "アクセス",
        "navListFacliitiesBtn": "施設を巡る",
        "navListActivitiesBtn": "周辺を巡る",
        "navRoomSearchText" : "空室検索",
        "reserveBtn" : "空室検索",


        "navSubRoomSearch": "空室検索",
        "navListVerticalHome": "ホーム",
        "navListVerticalStay": "ご宿泊",
        "navListVerticalDayTrip": "日帰り",
        "navListVerticalRestaurant": "懐石料理 花壇",
        "navListVerticalNews": "お知らせ",
        "navListVerticalGallery": "ギャラリー",
        "navListVerticalAccess": "アクセス",
        "navListVerticalFacilities": "施設を巡る",
        "navListVerticalActivities": "周辺を巡る",
        "navListVerticalShopping": "花壇ショッピング",
        "navListVerticalQuestion": "お問合せ",










        "aboutSectionText" : `箱根強羅の旧閑院宮別邸跡地に
        <br class="sp-hide">
        立地する強羅花壇。
        <br>
        日本古来の素材と現代的表現を併せ持つ館、
        <br class="sp-hide">
        源泉からこんこんと湧き出る温泉、
        <br>
        精選した旬の食材で彩られる本格懐石料理。
        <br>
        伝統的な「和」の息づく空間で、
        <br class="sp-hide">
        至極のひとときをお過ごしくださいませ。`,
        "aboutRoomBtn" : "新客室　別邸「暁」「曙」特設ページ",
        "staySectionTitle": "ご宿泊",
        "allRoomsBtn" : "客室一覧",
        "newsSectiontitle" : "お知らせ",
        "newsWrap1stTitle" : "【期間限定】フットマッサージ",
        "newsWrap1stBox" : "KADAN SPA強羅花壇",
        
        "newsWrap2ndTitle" : `全国旅行支援「いざ、神奈川」`,
        "newsWrap2ndBox" : "強羅花壇懐石料理 花壇",
        "newsWrap3rdTitle" : "令和4年 初夏　新KADAN SPA誕生 KADAN",
        "newsWrap3rdBox" : "KADAN SPA強羅花壇",
        "newsWrap4thTitle" : "オンライン会員】平日限定結婚記念日プラン ",
        "newsWrap4thBox" : "強羅花壇",

        "allNewsBtn" : "お知らせ一覧",

        "allGalleryBtn": "ギャラリー",

        "footerHomeBtn": "ホーム",
        "footerShoppingBtn": "花壇ショッピング",
        "footerFactSheetBtn": "ファクトシート",
        "footerPrivacyPolicyBtn": "プライバシーポリシー",

        "footerAddress" : `
        250-0408 神奈川県足柄下郡箱根町強羅1300
        <br>
        Tel: 0460-82-3331
        <br>
        Email: info@gorakadan.com`

        


   },




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



         "navSubRoomSearch": "Reserve",
         "navListVerticalHome": "Home",
         "navListVerticalStay": "Stay",
         "navListVerticalDayTrip": "Day Trip",
         "navListVerticalRestaurant": "Kaiseki Restaurant",
         "navListVerticalNews": "News",
         "navListVerticalGallery": "Gallery",
         "navListVerticalAccess": "Access",
         "navListVerticalFacilities": "Facliities",
         "navListVerticalActivities": "Activities",
         "navListVerticalShopping": "Shopping",
         "navListVerticalQuestion": "Question",
 


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


        "navSubRoomSearch": "预订客房",
        "navListStayBtn": "客房",
        "navListDayTripBtn": "一日游",
        "navListRestaurantBtn": "怀石料理",
        "navListNewsBtn": "公告",
        "navListGalleryBtn": "旅馆一览",
        "navListAccessBtn": "地址",
        "navListFacliitiesBtn": "旅馆设施",
        "navListActivitiesBtn": "旅馆周边",
        "navRoomSearchText" : "预订客房",
        "reserveBtn" : "预订客房",


        "navSubRoomSearch": "空室検索",
        "navListVerticalHome": "主页",
        "navListVerticalStay": "客房",
        "navListVerticalDayTrip": "一日游",
        "navListVerticalRestaurant": "怀石料理",
        "navListVerticalNews": "公告",
        "navListVerticalGallery": "旅馆一览",
        "navListVerticalAccess": "地址",
        "navListVerticalFacilities": "旅馆设施",
        "navListVerticalActivities": "旅馆周边",
        "navListVerticalShopping": "购物",
        "navListVerticalQuestion": "咨询",



        "aboutSectionText" : `箱根强罗花坛位于
        <br class="sp-hide">
        前日本四大贵族前閑院宮的别邸领地，
        <br>
        日本自古以来的素材和现代化美观融为一体，
        <br class="sp-hide">
        从泉源滚滚涌出的温泉,
        <br class="sp-hide">
        用精选当季时令食材点缀的正宗怀石料理，
        <br>
        请在充满“和”气息的空间里，
        <br>
        留下至上的回忆。`,
        "aboutRoomBtn" : "欣赏新客房 別邸「暁」「曙」",
        "staySectionTitle": "客房",
        "allRoomsBtn" : "客房一览",
        "newsSectiontitle" : "公告",
        "newsWrap1stTitle" : "[限时] 足疗",
        "newsWrap1stBox" : "SPA",
        
        "newsWrap2ndTitle" : `全国旅行支援 "去吧，神奈川。"`,
        "newsWrap2ndBox" : "怀石料理",
        "newsWrap3rdTitle" : "2022年 初夏 新KADAN SPA诞生",
        "newsWrap3rdBox" : "KADAN SPA",
        "newsWrap4thTitle" : "【官网会员】平日限定结婚纪念日计划",
        "newsWrap4thBox" : "强罗花坛",

        "allNewsBtn" : "公告一览",

        "allGalleryBtn": "旅馆一览",

        "footerHomeBtn": "主页",
        "footerShoppingBtn": "花坛购物",
        "footerFactSheetBtn": "资料页",
        "footerPrivacyPolicyBtn": "隐私政策",

        "footerAddress" : `
        神奈川县足柄下郡箱根町强罗1300
        <br>
        联系电话: +81-460-82-3331
        <br>
        电子邮箱： info@gorakadan.com`

        


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


    "navSubRoomSearch": "예약하기",
    "navListVerticalHome": "홈페이지",
    "navListVerticalStay": "객실",
    "navListVerticalDayTrip": "원데이 트립",
    "navListVerticalRestaurant": "가이세키 요리",
    "navListVerticalNews": "공지",
    "navListVerticalGallery": "갤러리",
    "navListVerticalAccess": "오시는 길",
    "navListVerticalFacilities": "시설 둘러보기",
    "navListVerticalActivities": "주변 둘러보기",
    "navListVerticalShopping": "쇼핑",
    "navListVerticalQuestion": "문의하기",







    "aboutSectionText" : `저희 하코네 고라카단은,
    <br class="sp-hide">
    옛 4대귀족 간인노미야 일족 별저 영지에 위치해 있습니다.
    <br>
    일본 전통적인 소재와 현대적 표현이 공존한 료칸입니다. 
    <br class="sp-hide">
    원천에서 용솟음쳐 나오는 온천,
    <br class="sp-hide">
    엄선한 제철 식재료로 각색된 전통 카이세키 요리,
    <br>
    전통적인 "和"가 숨쉬는 공간에서
    <br>
    더없이 좋은 시간을 보내십시오.
    `,
    "aboutRoomBtn" : `신설 객실 별장 "아카츠키", "아케보노" 둘러보기 `,
    "staySectionTitle": "객실",
    "allRoomsBtn" : "모든 객실 보기",
    "newsSectiontitle" : "공지",
    "newsWrap1stTitle" : "[기간 한정] 풋 마사지",
    "newsWrap1stBox" : "SPA",
    
    "newsWrap2ndTitle" : `전국 여행 지원 "지금 바로 카나가와로."`,
    "newsWrap2ndBox" : "카이세키 요리",
    "newsWrap3rdTitle" : "2022년 여름 신설 카단 스파 개장",
    "newsWrap3rdBox" : "카단 스파",
    "newsWrap4thTitle" : "【온라인 맴버십】평일한정 결혼 기념일 플랜",
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