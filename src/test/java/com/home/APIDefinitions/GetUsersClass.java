package com.home.APIDefinitions;

import static io.restassured.RestAssured.given;

import com.home.apimethods.APISupportMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static org.hamcrest.MatcherAssert.assertThat; 
import static org.hamcrest.Matchers.*;

public class GetUsersClass {

	String EndPoint, ResponseText;
	RequestSpecification request;
	Response response;
	APISupportMethods AO = new APISupportMethods();
	CreateUserTestClass CU = new CreateUserTestClass();
	
	@Given("^Set Get request EndPoint \"([^\"])\"$")
	public void setGetRequestEndPoint(String InputEndPoint) {
		EndPoint = AO.SetEndPoint(InputEndPoint);
	}
	
	@When("^Send the Users GET request and get Response$")
	public void SendGetRequest() {
		RestAssured.baseURI = CU.BaseURI;
		
		response = given().when().header("Content-Type",CU.ContentType)
				.header("Authorization",CU.AuthKey).get(EndPoint);
		String ResponseText = response.toString();
		System.out.println(ResponseText);
	}
	
	@Then("^Verify the count of Retrieved Users$")
	public void VerifyUserCount() {
		response.then().assertThat().body("_meta.code",equalTo("200"));
	}
}
