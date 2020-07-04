package com.home.test;
import org.junit.Assert;

import io.restassured.*;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.*;

public class GetRequestTestClass {
	
	public void getRequest() {
		
		RestAssured.baseURI = "http://dummy.restapiexample.com/api/v1";
		RequestSpecification request = given().when()
									.header("content-type","json");						
		Response resp = request.get("/employees");
		
		int statuscode = given().when()
		.header("content-type","json").get("/employees").getStatusCode();
		
		String body = resp.asString();
		System.out.println(body);
		//JsonPath jpath = resp.jsonPath();
		Assert.assertEquals(statuscode, 200);	
	}
	
	public static void main(String[] args) {
		GetRequestTestClass GC = new GetRequestTestClass();
		GC.getRequest();
	}
}