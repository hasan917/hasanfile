$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("multicart_user_DashBoard.feature");
formatter.feature({
  "line": 1,
  "name": "User MyCatlog create post",
  "description": "i want to post a new accessory",
  "id": "user-mycatlog-create-post",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2180700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 19372475800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4305235900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5933168400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user should see all dash board page options",
  "description": "",
  "id": "user-mycatlog-create-post;user-should-see-all-dash-board-page-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@wipp"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to  account page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select seller dashbosrd",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "i click on my catalog and navigate to catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I see catalog i click on Accessories link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i fill out accessories new product page one",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select proceed and land on varient details",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I land on varient details I must fill out shipping  detail and item photo and add product",
  "keyword": "When "
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_naviagte_to_account_page()"
});
formatter.result({
  "duration": 2610745200,
  "status": "passed"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_select_seller_dashbosrd()"
});
formatter.result({
  "duration": 3832908600,
  "status": "passed"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_click_on_my_catalog_and_navigate_to_catalog_page()"
});
formatter.result({
  "duration": 3932174200,
  "status": "passed"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_see_catalog_i_click_on_Accessories_link()"
});
formatter.result({
  "duration": 2018056300,
  "status": "passed"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_fill_out_accessories_new_product_page_one()"
});
formatter.result({
  "duration": 15004927600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"primery_btt\" id\u003d\"primery_btt_tab_1\" style\u003d\"background-color: yellow;\"\u003e...\u003c/button\u003e is not clickable at point (883, 551). Other element would receive the click: \u003cdiv class\u003d\"col-xs-12 col-sm-6 padding_B_30\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-U69P487\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cb8781416e1adb6a281aed3dca2c5ecd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat multicard.pages.object.model.MasterPage.clickElement(MasterPage.java:30)\r\n\tat multicard.pages.object.model.DashBoard_Accessories_page.addNewProductPage_1(DashBoard_Accessories_page.java:59)\r\n\tat multicard.steps.defination.Seller_DashBoard_Accessories_steps.i_fill_out_accessories_new_product_page_one(Seller_DashBoard_Accessories_steps.java:41)\r\n\tat ✽.Then i fill out accessories new product page one(multicart_user_DashBoard.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_select_proceed_and_land_on_varient_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Seller_DashBoard_Accessories_steps.i_land_on_varient_details_I_must_fill_out_shipping_detail_and_item_photo_and_add_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1263041100,
  "status": "passed"
});
formatter.uri("multicart_user_accounts.feature");
formatter.feature({
  "line": 1,
  "name": "User My Account Activities",
  "description": "As a User I want to check all my accounts realtd options\nSO i can perform all activities",
  "id": "user-my-account-activities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 757200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 6065679000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 5029363900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5256010600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Scenario: User Sees individual account option"
    },
    {
      "line": 11,
      "value": "#When I navigate to my Account page"
    },
    {
      "line": 12,
      "value": "#Then I see options \"My Orders\" available"
    },
    {
      "line": 13,
      "value": "#Then I see options \"Profile\" available"
    },
    {
      "line": 14,
      "value": "#Then I see options \"My Return Requests\" available"
    },
    {
      "line": 15,
      "value": "#Then I see options \"Change Password\" available"
    }
  ],
  "line": 17,
  "name": "User Sees all Account Options",
  "description": "",
  "id": "user-my-account-activities;user-sees-all-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I navigate to my Account page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see all aviable options below",
  "rows": [
    {
      "cells": [
        "My Orders"
      ],
      "line": 20
    },
    {
      "cells": [
        "Profile"
      ],
      "line": 21
    },
    {
      "cells": [
        "My Return Requests"
      ],
      "line": 22
    },
    {
      "cells": [
        "Change Password-X-"
      ],
      "line": 23
    },
    {
      "cells": [
        "My Favorite Products"
      ],
      "line": 24
    },
    {
      "cells": [
        "My Favorite Sellers"
      ],
      "line": 25
    },
    {
      "cells": [
        "Seller Dashboard"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountSteps.i_navigate_to_my_Account_page()"
});
formatter.result({
  "duration": 3838871800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.i_see_all_aviable_options_below(DataTable)"
});
formatter.result({
  "duration": 758412600,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c[My Orders, Profile, My Return Requests, Change Password, My Favorite Products, My Favorite Sellers, Seller Dashboard]\u003e\n     but: was \u003c[My Orders, Profile, My Return Requests, Change Password-X-, My Favorite Products, My Favorite Sellers, Seller Dashboard]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat multicard.steps.defination.MyAccountSteps.i_see_all_aviable_options_below(MyAccountSteps.java:66)\r\n\tat ✽.Then I see all aviable options below(multicart_user_accounts.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4626957400,
  "status": "passed"
});
formatter.uri("multicart_user_login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nAs a User I want to perform a online login",
  "id": "user-login-mechanism",
  "keyword": "Feature"
});
formatter.before({
  "duration": 201500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 5849174300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4697222000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull login",
  "description": "",
  "id": "user-login-mechanism;successfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect to seee profile Name as James Williams",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5257728900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_expect_to_seee_profile_Name_as_James_Williams()"
});
formatter.result({
  "duration": 685087900,
  "status": "passed"
});
formatter.after({
  "duration": 4355058700,
  "status": "passed"
});
formatter.before({
  "duration": 273500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 5855161200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4795487000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with blanc password",
  "description": "",
  "id": "user-login-mechanism;login-with-blanc-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I complete login with James No Password credentails",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I expect to seee no password error text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_No_Password_credentails()"
});
formatter.result({
  "duration": 5123371800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_expect_to_seee_no_password_error_text()"
});
formatter.result({
  "duration": 625464000,
  "status": "passed"
});
formatter.after({
  "duration": 1062577800,
  "status": "passed"
});
formatter.before({
  "duration": 933900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 6469199700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4193480200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with blanc id",
  "description": "",
  "id": "user-login-mechanism;login-with-blanc-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I complete login with James No Id credentails",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I expect to seee enter user Name error text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_with_James_No_Id_credentails()"
});
formatter.result({
  "duration": 5625672000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_expect_to_seee_enter_user_Name_error_text()"
});
formatter.result({
  "duration": 583658800,
  "status": "passed"
});
formatter.after({
  "duration": 4579211100,
  "status": "passed"
});
formatter.uri("multicart_user_order.feature");
formatter.feature({
  "line": 1,
  "name": "User Orders Mechanism",
  "description": "As a User I want to perform all orders related activity\n  So I can see my Orders , History, All those stuff",
  "id": "user-orders-mechanism",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1116200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 6219385000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4848559600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5785575000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Order Page Header Check",
  "description": "",
  "id": "user-orders-mechanism;order-page-header-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to order page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect Order page header is availablee",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_order_page()"
});
formatter.result({
  "duration": 8147012500,
  "status": "passed"
});
formatter.match({
  "location": "OrderStpes.I_expect_order_table_is_availablee()"
});
formatter.result({
  "duration": 627395000,
  "status": "passed"
});
formatter.after({
  "duration": 1013471200,
  "status": "passed"
});
formatter.before({
  "duration": 285400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 5910597400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 5055093800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5230887400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Order History Table Aviable",
  "description": "",
  "id": "user-orders-mechanism;order-history-table-aviable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to order page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I expect Order History Table Avaiable",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_order_page()"
});
formatter.result({
  "duration": 7776461400,
  "status": "passed"
});
formatter.match({
  "location": "OrderStpes.I_expect_Order_History_Table_Avaiable()"
});
formatter.result({
  "duration": 588259000,
  "status": "passed"
});
formatter.after({
  "duration": 859358400,
  "status": "passed"
});
});