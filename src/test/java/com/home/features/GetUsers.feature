Feature: Verify Get User Request Test Scenarios

Background:
Given Set Base URL for Get User Request
And Set Get request EndPoint "users"
And Set Headers for Get request
| ContentType      | AuthKey  |
| application/json | Bearer Dby4CWa-pT1JsyoGO2cxM4WjpKD7C2B5oChE |
When Send the Users GET request and get Response

@Smoke
Scenario: Verify all the users are retrieved in GET request
Then Verify the Response Code for Get Request

@Regression
Scenario: Verify the count of Users Fetched
Then Verify the count of Retrieved Users

@Regression
Scenario: Verify Particular User ID exists
Given Verify the User ID "1877" exists