$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/Mohan/Selenium_Software/WorkSpace/Cucumber.REST_API/src/main/java/com/home/features/CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create User Test Cases",
  "description": "",
  "id": "create-user-test-cases",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Set Base URL of the API",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserTestClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 156124100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify whether User can create with all Parameters",
  "description": "",
  "id": "create-user-test-cases;verify-whether-user-can-create-with-all-parameters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 6,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Set Post Request EndPoint \"users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Set Headers for the request",
  "rows": [
    {
      "cells": [
        "ContentType",
        "AuthKey"
      ],
      "line": 10
    },
    {
      "cells": [
        "application/json",
        "Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Form Post Request Parameters for \"TC006\" from Excel Sheet \"Users\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Send the Post Request and get Response",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify whether the response is success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 27
    }
  ],
  "location": "CreateUserTestClass.setPostRequestEndPoint(String)"
});
formatter.result({
  "duration": 4709100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1684900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC006",
      "offset": 34
    },
    {
      "val": "Users",
      "offset": 59
    }
  ],
  "location": "CreateUserTestClass.formPostRequestParams(String,String)"
});
formatter.result({
  "duration": 1027957900,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 4184225800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 2101000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Set Base URL of the API",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserTestClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 560400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify Validation Message on Duplicate User Creation",
  "description": "",
  "id": "create-user-test-cases;verify-validation-message-on-duplicate-user-creation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Set Post Request EndPoint \"users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Set Headers for the request",
  "rows": [
    {
      "cells": [
        "ContentType",
        "AuthKey"
      ],
      "line": 30
    },
    {
      "cells": [
        "application/json",
        "Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Form Post Request Parameters for \"TC008\" from Excel Sheet \"Users\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Send the Post Request and get Response",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Verify response contains Duplicate User Validation",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 27
    }
  ],
  "location": "CreateUserTestClass.setPostRequestEndPoint(String)"
});
formatter.result({
  "duration": 114800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC008",
      "offset": 34
    },
    {
      "val": "Users",
      "offset": 59
    }
  ],
  "location": "CreateUserTestClass.formPostRequestParams(String,String)"
});
formatter.result({
  "duration": 85456700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 711094700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyDuplicateUserValidtion()"
});
formatter.result({
  "duration": 607675600,
  "status": "passed"
});
});