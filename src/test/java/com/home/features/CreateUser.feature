Feature: Create User Test Cases

Background:
Given Set Base URL for Post User Request

@Regression @End2End
Scenario: Verify whether User can create with all Parameters
Given Set Post Request EndPoint "users"
And Set Headers for post request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
And Form Post Request Parameters for "TC006" from Excel Sheet "Users"
When Send the Post Request and get Response
Then Verify whether the response is success

@Smoke
Scenario: Verify whether User can create with Mandatory Parameters
Given Set Post Request EndPoint "users"
And Set Headers for post request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
And Form Post Request Parameters for "TC007" from Excel Sheet "Users"
When Send the Post Request and get Response
Then Verify whether the response is success

@End2End
Scenario: Verify Validation Message on Duplicate User Creation
Given Set Post Request EndPoint "users"
And Set Headers for post request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
And Form Post Request Parameters for "TC008" from Excel Sheet "Users"
When Send the Post Request and get Response
Then Verify response contains Duplicate User Validation