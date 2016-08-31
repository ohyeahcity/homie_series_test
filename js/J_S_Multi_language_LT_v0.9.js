//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}




//控制圖片中的語系
function changeImageByLang(lang_index){


  switch (lang_index) {

    case 0:
          document.getElementById('lang_slidetitle').src = "images/slider_temporary.jpg" ;
          document.getElementById('lang_slidehomie').src = "images/slider_example_2.jpg" ;
          document.getElementById('lang_slidehub').src = "images/eql_roomHub.jpg" ;
          document.getElementById('lang_slidepm').src = "images/eql_pm25.jpg" ;
          document.getElementById('lang_slideair').src = "images/eql_air_purifier.jpg" ;
          document.getElementById('lang_slidepreasure').src = "images/eql_bloodpreasure.jpg" ;
          console.log("image is cht");

      break;
    case 1:
        document.getElementById('lang_slidetitle').src = "images/slider_temporary_en.jpg" ;
        document.getElementById('lang_slidehomie').src = "images/slider_example_2_en.jpg" ;
        document.getElementById('lang_slidehub').src = "images/eql_roomHub_en.jpg" ;
        document.getElementById('lang_slidepm').src = "images/eql_pm25_en.jpg" ;
        document.getElementById('lang_slideair').src = "images/eql_air_purifier_en.jpg" ;
        document.getElementById('lang_slidepreasure').src = "images/eql_bloodpreasure_en.jpg" ;

        console.log("english image now");
      break;
    default:
      document.getElementById('lang_slidetitle').src = "images/slider_temporary.jpg" ;
      document.getElementById('lang_slidehomie').src = "images/slider_example_2.jpg" ;
      document.getElementById('lang_slidehub').src = "images/eql_roomHub.jpg" ;
      document.getElementById('lang_slidepm').src = "images/eql_pm25.jpg" ;
      document.getElementById('lang_slideair').src = "images/eql_air_purifier.jpg" ;
      document.getElementById('lang_slidepreasure').src = "images/eql_bloodpreasure.jpg" ;

      console.log("image is default cht");
      break;

  }
  return;

}



//更換語系
function changeAllNavBarUIWording(arr,lang_index){
/*
  document.getElementById('nav_link1_wording').innerHTML = arr[lang_index].NavLink1;
  document.getElementById('nav_link2_wording').innerHTML = arr[lang_index].NavLink2;
  document.getElementById('nav_link3_wording').innerHTML = arr[lang_index].NavLink3;
  document.getElementById('nav_link4_wording').innerHTML = arr[lang_index].NavLink4;
  document.getElementById('nav_link5_wording').innerHTML = arr[lang_index].NavLink5;*/


  document.getElementById('lang_navproduct').innerHTML = arr[lang_index].lang_navproduct;
  document.getElementById('lang_navhub').innerHTML = arr[lang_index].lang_navhub;
  document.getElementById('lang_navpm').innerHTML = arr[lang_index].lang_navpm;
  document.getElementById('lang_navair').innerHTML = arr[lang_index].lang_navair;
  document.getElementById('lang_navmeter').innerHTML = arr[lang_index].lang_navmeter;
  document.getElementById('lang_navch').innerHTML = arr[lang_index].lang_navch;
  document.getElementById('lang_naven').innerHTML = arr[lang_index].lang_naven;

  document.getElementById('lang_homie_cont').innerHTML = arr[lang_index].lang_homie_cont;
  document.getElementById('lang_feature_title01').innerHTML = arr[lang_index].lang_feature_title01;
  document.getElementById('lang_feature_title02').innerHTML = arr[lang_index].lang_feature_title02;
  document.getElementById('lang_feature_title03').innerHTML = arr[lang_index].lang_feature_title03;
  document.getElementById('lang_feature_title04').innerHTML = arr[lang_index].lang_feature_title04;
  document.getElementById('lang_feature_title05').innerHTML = arr[lang_index].lang_feature_title05;
  document.getElementById('lang_product').innerHTML = arr[lang_index].lang_product;
  document.getElementById('lang_product_title').innerHTML = arr[lang_index].lang_product_title;
  document.getElementById('lang_product_hub').innerHTML = arr[lang_index].lang_product_hub;
  document.getElementById('lang_product_hubcont').innerHTML = arr[lang_index].lang_product_hubcont;
  document.getElementById('lang_product_pm').innerHTML = arr[lang_index].lang_product_pm;
  document.getElementById('lang_product_pmcont').innerHTML = arr[lang_index].lang_product_pmcont;
  document.getElementById('lang_product_air').innerHTML = arr[lang_index].lang_product_air;
  document.getElementById('lang_product_aircont').innerHTML = arr[lang_index].lang_product_aircont;
  document.getElementById('lang_product_meter').innerHTML = arr[lang_index].lang_product_meter;
  document.getElementById('lang_product_metercont').innerHTML = arr[lang_index].lang_product_metercont;
  document.getElementById('lang_product_light').innerHTML = arr[lang_index].lang_product_light;
  document.getElementById('lang_product_lightcont').innerHTML = arr[lang_index].lang_product_lightcont;
  document.getElementById('lang_product_plugcont').innerHTML = arr[lang_index].lang_product_plugcont;



  return;
}





function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_lang(0);
        break;
      case "zh-cn":
            chg_lang(0);
        break;
      case "zh-hk":
            chg_lang(0);
        break;
      case "ja":
            chg_lang(2);
        break;

      default:
            chg_lang(1);
        break;
    }
}




//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - Homie網站";
Multi_Lang_Title[1]="Welcome to EQL - Homie";
Multi_Lang_Title[2]="EQLへようこそ - Homie";


//=====文字儲存區 END======
