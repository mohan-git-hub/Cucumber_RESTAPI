package com.home.APIDefinitions;

import static io.restassured.RestAssured.given;

import com.home.apimethods.APISupportMethods;
import com.home.util.APIBase;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static org.hamcrest.MatcherAssert.assertThat; 
import static org.hamcrest.Matchers.*;

import java.util.List;
import java.util.Map;

public class GetUsersClass extends APIBase {

	String EndPoint, ResponseText, BaseURI, ContentType, AuthKey;
	RequestSpecification request;
	Response response;
	APISupportMethods AO = new APISupportMethods();
	CreateUserTestClass CU = new CreateUserTestClass();

	
	@Given("^Set Get request EndPoint \"([^\"]*)\"$")
	public void setGetRequestEndPoint(String InputEndPoint) {
		EndPoint = AO.SetEndPoint(InputEndPoint);
	}
	
	@And("^Set Headers for Get request$")
	public void setHeaders(DataTable data) {
		List<Map<String,String>> HeaderMap =  data.asMaps(String.class, String.class);
		ContentType = HeaderMap.get(0).get("ContentType");
		AuthKey = HeaderMap.get(0).get("AuthKey");	
	}

	
	@When("^Send the Users GET request and get Response$")
	public void SendGetRequest() {
		
		RestAssured.baseURI = "https://gorest.co.in/public-api";
		response = given().when().header("Content-Type",ContentType)
				.header("Authorization",AuthKey).get(EndPoint);
		String ResponseText = response.toString();
		System.out.println(ResponseText);
	}
	
	@Then("^Verify the count of Retrieved Users$")
	public void VerifyUserCount() {
		response.then().assertThat().body("_meta.code",equalTo(200));
	}
}
