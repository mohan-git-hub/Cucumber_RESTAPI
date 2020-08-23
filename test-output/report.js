$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetUsers.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Get User Request Test Scenarios",
  "description": "",
  "id": "verify-get-user-request-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 303800,
  "status": "passed"
});
formatter.before({
  "duration": 99300,
  "status": "passed"
});
formatter.before({
  "duration": 87600,
  "status": "passed"
});
formatter.before({
  "duration": 354000,
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
  "name": "Set Base URL for Get User Request",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Set Get request EndPoint \"users\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Set Headers for Get request",
  "rows": [
    {
      "cells": [
        "ContentType",
        "AuthKey"
      ],
      "line": 7
    },
    {
      "cells": [
        "application/json",
        "Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Send the Users GET request and get Response",
  "keyword": "When "
});
formatter.match({
  "location": "GetUsersClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 204177000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 26
    }
  ],
  "location": "GetUsersClass.setGetRequestEndPoint(String)"
});
formatter.result({
  "duration": 3033900,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1415300,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 5969338500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "200:3:Verify Particular User ID exists",
  "description": "",
  "id": "verify-get-user-request-test-scenarios;200:3:verify-particular-user-id-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Get-3-Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Verify the User ID \"5390\" exists",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "5390",
      "offset": 20
    }
  ],
  "location": "GetUsersClass.VerifyUserID(String)"
});
formatter.result({
  "duration": 1186507700,
  "status": "passed"
});
formatter.after({
  "duration": 86400,
  "status": "passed"
});
formatter.after({
  "duration": 67700,
  "status": "passed"
});
formatter.after({
  "duration": 96500,
  "status": "passed"
});
});