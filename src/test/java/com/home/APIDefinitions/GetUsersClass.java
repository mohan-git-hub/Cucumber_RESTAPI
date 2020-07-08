package com.home.APIDefinitions;
//Check Git Commit 1

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import java.util.List;
import java.util.Map;

import com.home.apimethods.APISupportMethods;
import com.home.util.APIBase;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class GetUsersClass extends APIBase {

	String EndPoint, ResponseText, BaseURI, ContentType, AuthKey;
	RequestSpecification request;
	Response response;
	ResponseBody body;
	APISupportMethods AO = new APISupportMethods();
	CreateUserTestClass CU = new CreateUserTestClass();
	
	@Given("^Set Base URL for Get User Request$")
	public void setBaseAPIURI() {
		BaseURI = setBaseAPI();
	}
	
	@And("^Set Headers for Get request$")
	public void setHeaders(DataTable data) {
		List<Map<String,String>> HeaderMap =  data.asMaps(String.class, String.class);
		ContentType = HeaderMap.get(0).get("ContentType");
		AuthKey = HeaderMap.get(0).get("AuthKey");	
	}
	
	@And("^Set Get request EndPoint \"([^\"]*)\"$")
	public void setGetRequestEndPoint(String InputEndPoint) {
		EndPoint = AO.SetEndPoint(InputEndPoint);
	}
	
	@When("^Send the Users GET request and get Response$")
	public void SendGetRequest() {
		RestAssured.baseURI = BaseURI;
		
		response = given().when().header("Content-Type",ContentType)
				.header("Authorization",AuthKey).get(EndPoint);
		body = response.getBody();
		System.out.println("Response Text is "+ body.asString());
	}
	
	@Then("^Verify the Response Code for Get Request$")
	public void VerifyUserResponseCode() {
		response.then().assertThat().body("_meta.code",equalTo(200));
	}
	
	@Then("^Verify the count of Retrieved Users$")
	public void VerifyUserCount() {
		response.then().assertThat().body("result.id",hasSize(20));
	}
	
	@Given("^Verify the User ID \"(.*)\" exists$")
	public void VerifyUserID(String UserID) {
		System.out.println("Response Text II is "+ body.asString());
		response.then().assertThat().body("result.id",hasItem(UserID));
	}

}
