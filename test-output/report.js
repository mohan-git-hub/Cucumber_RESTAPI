$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create User Test Cases",
  "description": "",
  "id": "create-user-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 263300,
  "status": "passed"
});
formatter.before({
  "duration": 101900,
  "status": "passed"
});
formatter.before({
  "duration": 142700,
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
  "name": "Set Base URL for Post User Request",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserTestClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 195028900,
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
  "name": "Set Headers for post request",
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
  "duration": 7313500,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1476000,
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
  "duration": 954845100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 4071442500,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 6273000,
  "status": "passed"
});
formatter.after({
  "duration": 607300,
  "status": "passed"
});
formatter.after({
  "duration": 163600,
  "status": "passed"
});
formatter.after({
  "duration": 131000,
  "status": "passed"
});
formatter.before({
  "duration": 148100,
  "status": "passed"
});
formatter.before({
  "duration": 85300,
  "status": "passed"
});
formatter.before({
  "duration": 67900,
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
  "name": "Set Base URL for Post User Request",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserTestClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 506400,
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
  "name": "Set Headers for post request",
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
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 71800,
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
  "duration": 72232300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 716537900,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 47800,
  "status": "passed"
});
formatter.after({
  "duration": 52900,
  "status": "passed"
});
formatter.after({
  "duration": 55200,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 77100,
  "status": "passed"
});
formatter.before({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 55200,
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
  "name": "Set Base URL for Post User Request",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserTestClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 313400,
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
  "name": "Set Headers for post request",
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
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 73800,
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
  "duration": 39844400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 671290000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyDuplicateUserValidtion()"
});
formatter.result({
  "duration": 675246500,
  "status": "passed"
});
formatter.after({
  "duration": 786200,
  "status": "passed"
});
formatter.after({
  "duration": 185900,
  "status": "passed"
});
formatter.after({
  "duration": 201500,
  "status": "passed"
});
formatter.uri("GetUsers.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Get User Request Test Scenarios",
  "description": "",
  "id": "verify-get-user-request-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 544000,
  "status": "passed"
});
formatter.before({
  "duration": 200700,
  "status": "passed"
});
formatter.before({
  "duration": 199500,
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
formatter.match({
  "location": "GetUsersClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 870600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify all the users are retrieved in GET request",
  "description": "",
  "id": "verify-get-user-request-test-scenarios;verify-all-the-users-are-retrieved-in-get-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Set Get request EndPoint \"users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Set Headers for Get request",
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
  "name": "Send the Users GET request and get Response",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify the Response Code for Get Request",
  "keyword": "Then "
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
  "duration": 96700,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 159600,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 756540300,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.VerifyUserResponseCode()"
});
formatter.result({
  "duration": 339445000,
  "status": "passed"
});
formatter.after({
  "duration": 79300,
  "status": "passed"
});
formatter.after({
  "duration": 67700,
  "status": "passed"
});
formatter.after({
  "duration": 64200,
  "status": "passed"
});
formatter.before({
  "duration": 290400,
  "status": "passed"
});
formatter.before({
  "duration": 199500,
  "status": "passed"
});
formatter.before({
  "duration": 193100,
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
formatter.match({
  "location": "GetUsersClass.setBaseAPIURI()"
});
formatter.result({
  "duration": 473800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the count of Users Fetched",
  "description": "",
  "id": "verify-get-user-request-test-scenarios;verify-the-count-of-users-fetched",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Set Get request EndPoint \"users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Set Headers for Get request",
  "rows": [
    {
      "cells": [
        "ContentType",
        "AuthKey"
      ],
      "line": 19
    },
    {
      "cells": [
        "application/json",
        "Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Send the Users GET request and get Response",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify the count of Retrieved Users",
  "keyword": "Then "
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
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 111500,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 662993400,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.VerifyUserCount()"
});
formatter.result({
  "duration": 69060900,
  "status": "passed"
});
formatter.after({
  "duration": 363900,
  "status": "passed"
});
formatter.after({
  "duration": 56800,
  "status": "passed"
});
formatter.after({
  "duration": 178000,
  "status": "passed"
});
});