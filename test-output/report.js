$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create User Test Cases",
  "description": "",
  "id": "create-user-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 318800,
  "status": "passed"
});
formatter.before({
  "duration": 434800,
  "status": "passed"
});
formatter.before({
  "duration": 347800,
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
  "duration": 175064900,
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
  "duration": 3018400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 1698300,
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
  "duration": 921265600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 10397063800,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 3464700,
  "status": "passed"
});
formatter.after({
  "duration": 120700,
  "status": "passed"
});
formatter.after({
  "duration": 100900,
  "status": "passed"
});
formatter.after({
  "duration": 113500,
  "status": "passed"
});
formatter.before({
  "duration": 386700,
  "status": "passed"
});
formatter.before({
  "duration": 112800,
  "status": "passed"
});
formatter.before({
  "duration": 311000,
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
  "duration": 720400,
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
  "duration": 157100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 311500,
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
  "duration": 73527300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 714042600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyResponseCode()"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.after({
  "duration": 183200,
  "status": "passed"
});
formatter.after({
  "duration": 156200,
  "status": "passed"
});
formatter.after({
  "duration": 190800,
  "status": "passed"
});
formatter.before({
  "duration": 391500,
  "status": "passed"
});
formatter.before({
  "duration": 205500,
  "status": "passed"
});
formatter.before({
  "duration": 154400,
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
  "duration": 984700,
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
  "duration": 136200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 151000,
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
  "duration": 63797000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.SendPostRequest()"
});
formatter.result({
  "duration": 617081000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserTestClass.verifyDuplicateUserValidtion()"
});
formatter.result({
  "duration": 838950700,
  "status": "passed"
});
formatter.after({
  "duration": 84000,
  "status": "passed"
});
formatter.after({
  "duration": 69400,
  "status": "passed"
});
formatter.after({
  "duration": 68500,
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
  "duration": 278500,
  "status": "passed"
});
formatter.before({
  "duration": 166400,
  "status": "passed"
});
formatter.before({
  "duration": 50300,
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
  "duration": 888300,
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
  "duration": 94300,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 380500,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 730609600,
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
  "duration": 216183400,
  "status": "passed"
});
formatter.after({
  "duration": 65500,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.after({
  "duration": 36200,
  "status": "passed"
});
formatter.before({
  "duration": 92200,
  "status": "passed"
});
formatter.before({
  "duration": 53900,
  "status": "passed"
});
formatter.before({
  "duration": 51700,
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
  "duration": 767200,
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
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 791900,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 671104800,
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
  "duration": 79254700,
  "status": "passed"
});
formatter.after({
  "duration": 73100,
  "status": "passed"
});
formatter.after({
  "duration": 54000,
  "status": "passed"
});
formatter.after({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 85100,
  "status": "passed"
});
formatter.before({
  "duration": 46800,
  "status": "passed"
});
formatter.before({
  "duration": 61300,
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
  "duration": 758200,
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
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.setHeaders(DataTable)"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.match({
  "location": "GetUsersClass.SendGetRequest()"
});
formatter.result({
  "duration": 697276900,
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
  "name": "Verify the User ID \"1847\" exists",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "1847",
      "offset": 20
    }
  ],
  "location": "GetUsersClass.VerifyUserID(String)"
});
formatter.result({
  "duration": 90836400,
  "status": "passed"
});
formatter.after({
  "duration": 61200,
  "status": "passed"
});
formatter.after({
  "duration": 45700,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
});