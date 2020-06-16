package com.home.APIDefinitions;

import java.util.*;

import org.json.simple.JSONObject;

import com.home.apimethods.APISupportMethods;
import com.home.util.APIBase;
import com.home.util.TestData;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import static io.restassured.RestAssured.*;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;


public class CreateUserTestClass extends APIBase {
	
	String EndPoint, BaseURI, ContentType, AuthKey;
	APISupportMethods AO = new APISupportMethods();
	JSONObject reqparams, ResponseJSON;
	RequestSpecification request;
	Response response;
	String ResponseText;
	
@Given("^Set Base URL of the API$")
public void setBaseAPIURI() {
	BaseURI = setBaseAPI();
}

@Given("^Set Post Request EndPoint \"([^\"]*)\"$")
public void setPostRequestEndPoint(String CreateUserEndPoint) {
	EndPoint = AO.SetEndPoint(CreateUserEndPoint);
}

@And("^Set Headers for the request$")
public void setHeaders(DataTable data) {
	List<Map<String,String>> HeaderMap =  data.asMaps(String.class, String.class);
	ContentType = HeaderMap.get(0).get("ContentType");
	AuthKey = HeaderMap.get(0).get("AuthKey");	
}

@And("^Form Post Request Parameters for \"([^\"]*)\" from Excel Sheet \"([^\"]*)\"$")
public void formPostRequestParams(String TestCaseID, String TestSheet){
	
	LinkedHashMap<String,String> TestDataMap = new LinkedHashMap<String,String>();
	reqparams = new JSONObject();
	try {
	String FileName = setTestDataFile();
	TestDataMap = TestData.getAPIData(FileName,TestSheet,TestCaseID);
	reqparams = AO.BuildPostRequest(TestDataMap);
	}
	catch(Exception e) {
		e.printStackTrace();
	}
}

@When("^Send the Post Request and get Response$")
public void SendPostRequest() {
	RestAssured.baseURI = BaseURI;
	System.out.println("Request Json is " + reqparams.toJSONString());
	request = given().header("Content-Type",ContentType)
									.header("Authorization",AuthKey)
									.body(reqparams.toJSONString());
	response = request.post(EndPoint);
	ResponseText = response.asString();
	
}
@Then("^Verify whether the response is success$")
public void verifyResponseCode() {
	Assert.assertEquals(200, response.getStatusCode());;
}

@Then("^Verify response contains Duplicate User Validation$")
public void verifyDuplicateUserValidtion() {
	System.out.println("Response Text is " + response.asString());
	JsonPath responseJpath = response.jsonPath();
	JsonPath rjpath = new JsonPath(ResponseText);
	String message = responseJpath.get("_meta.message");
	Assert.assertEquals("Data validation failed. Please check the response body for detailed error messages.",message);
}
}
