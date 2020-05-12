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
  "duration": 379537300,
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
  "duration": 3720200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1424700,
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
  "duration": 1413522400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 6067639000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 19303200,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c302\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.home.APIDefinitions.CreateUserTestClass.verifyResponseCode(CreateUserTestClass.java:76)\r\n\tat ✽.Then Verify whether the response is success(G:/Mohan/Selenium_Software/WorkSpace/Cucumber.REST_API/src/main/java/com/home/features/CreateUser.feature:14)\r\n",
  "status": "failed"
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
  "duration": 456300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether User can create with Mandatory Parameters",
  "description": "",
  "id": "create-user-test-cases;verify-whether-user-can-create-with-mandatory-parameters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Set Post Request EndPoint \"users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set Headers for the request",
  "rows": [
    {
      "cells": [
        "ContentType",
        "AuthKey"
      ],
      "line": 20
    },
    {
      "cells": [
        "application/json",
        "Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Form Post Request Parameters for \"TC007\" from Excel Sheet \"Users\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Send the Post Request and get Response",
  "keyword": "When "
});
formatter.step({
  "line": 24,
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
  "duration": 114300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 154800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC007",
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
  "duration": 75004000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 556427000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 245100,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c302\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.home.APIDefinitions.CreateUserTestClass.verifyResponseCode(CreateUserTestClass.java:76)\r\n\tat ✽.Then Verify whether the response is success(G:/Mohan/Selenium_Software/WorkSpace/Cucumber.REST_API/src/main/java/com/home/features/CreateUser.feature:24)\r\n",
  "status": "failed"
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
  "duration": 402200,
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
  "duration": 76500,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 102400,
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
  "duration": 56620600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 594454800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyDuplicateUserValidtion()"
});
formatter.result({
  "duration": 849945900,
  "status": "passed"
});
});