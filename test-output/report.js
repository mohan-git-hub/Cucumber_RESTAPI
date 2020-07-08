$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create User Test Cases",
  "description": "",
  "id": "create-user-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 442200,
  "status": "passed"
});
formatter.before({
  "duration": 6015200,
  "status": "passed"
});
formatter.before({
  "duration": 99800,
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
  "duration": 148639500,
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
  "duration": 7235800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1674600,
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
  "duration": 905440500,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 10083344400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 1994300,
  "status": "passed"
});
formatter.after({
  "duration": 99000,
  "status": "passed"
});
formatter.after({
  "duration": 111000,
  "status": "passed"
});
formatter.after({
  "duration": 149800,
  "status": "passed"
});
formatter.before({
  "duration": 189700,
  "status": "passed"
});
formatter.before({
  "duration": 161600,
  "status": "passed"
});
formatter.before({
  "duration": 172100,
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
  "duration": 511300,
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
  "duration": 130600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 128800,
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
  "duration": 104191200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 7831070700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
formatter.after({
  "duration": 59100,
  "status": "passed"
});
formatter.after({
  "duration": 50900,
  "status": "passed"
});
formatter.after({
  "duration": 52300,
  "status": "passed"
});
formatter.before({
  "duration": 88300,
  "status": "passed"
});
formatter.before({
  "duration": 75600,
  "status": "passed"
});
formatter.before({
  "duration": 58900,
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
  "duration": 484200,
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
  "duration": 85900,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 149900,
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
  "duration": 97715000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 7730879400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyDuplicateUserValidtion()"
});
formatter.result({
  "duration": 1724992100,
  "status": "passed"
});
formatter.after({
  "duration": 54300,
  "status": "passed"
});
formatter.after({
  "duration": 52900,
  "status": "passed"
});
formatter.after({
  "duration": 49100,
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
  "duration": 211200,
  "status": "passed"
});
formatter.before({
  "duration": 71700,
  "status": "passed"
});
formatter.before({
  "duration": 274300,
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
  "duration": 1083700,
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
  "duration": 144300,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 161800,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 4197270400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify all the users are retrieved in GET request",
  "description": "",
  "id": "verify-get-user-request-test-scenarios;verify-all-the-users-are-retrieved-in-get-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Verify the Response Code for Get Request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetUsersClass.VerifyUserResponseCode()"
});
formatter.result({
  "duration": 579476500,
  "status": "passed"
});
formatter.after({
  "duration": 198200,
  "status": "passed"
});
formatter.after({
  "duration": 145200,
  "status": "passed"
});
formatter.after({
  "duration": 119100,
  "status": "passed"
});
formatter.before({
  "duration": 169800,
  "status": "passed"
});
formatter.before({
  "duration": 117900,
  "status": "passed"
});
formatter.before({
  "duration": 169600,
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
  "duration": 1430800,
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
  "duration": 82400,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 103200,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 5419843800,
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
  "name": "Verify the count of Retrieved Users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetUsersClass.VerifyUserCount()"
});
formatter.result({
  "duration": 78545900,
  "status": "passed"
});
formatter.after({
  "duration": 118900,
  "status": "passed"
});
formatter.after({
  "duration": 51700,
  "status": "passed"
});
formatter.after({
  "duration": 158500,
  "status": "passed"
});
formatter.before({
  "duration": 95300,
  "status": "passed"
});
formatter.before({
  "duration": 51800,
  "status": "passed"
});
formatter.before({
  "duration": 57600,
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
  "duration": 922500,
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
  "duration": 142800,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 147500,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 13888342000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Particular User ID exists",
  "description": "",
  "id": "verify-get-user-request-test-scenarios;verify-particular-user-id-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Verify the User ID \"1877\" exists",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "1877",
      "offset": 20
    }
  ],
  "location": "GetUsersClass.VerifyUserID(String)"
});
formatter.result({
  "duration": 55030800,
  "status": "passed"
});
formatter.after({
  "duration": 184700,
  "status": "passed"
});
formatter.after({
  "duration": 164500,
  "status": "passed"
});
formatter.after({
  "duration": 127600,
  "status": "passed"
});
});