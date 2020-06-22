Feature: Verify Get User Request Test Scenarios

Background:
Given Set Base URL for Get User Request

@Smoke
Scenario: Verify all the users are retrieved in GET request
Given Set Get request EndPoint "users"
And Set Headers for Get request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
When Send the Users GET request and get Response
Then Verify the Response Code for Get Request

@Regression
Scenario: Verify the count of Users Fetched
Given Set Get request EndPoint "users"
And Set Headers for Get request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
When Send the Users GET request and get Response
Then Verify the count of Retrieved Users