package com.home.util;

import java.io.FileInputStream;
import java.util.Properties;
import org.json.JSONException;
import org.json.JSONObject;
import io.restassured.*;
import io.restassured.response.Response;

public class APIBase {

	public static Properties props;
	
	public APIBase() {
		try {
		FileInputStream FIS = new FileInputStream("G:\\Mohan\\Selenium_Software\\WorkSpace\\Cucumber.REST_API\\src\\main\\java\\com\\home\\config\\API.properties");
		props = new Properties();
		props.load(FIS);
		}
		catch(Exception e) {
			
		}
	}
	public String setBaseAPI() {
		String BaseURL;
		return BaseURL = props.getProperty("BaseURL");
	}
	
	public String setTestDataFile() {
		String FileName;
		return FileName = props.getProperty("TestDataFile");
	}
	
	public String getReportConfigPath() {
		String ReportPath = props.getProperty("reportConfigPath");
		if(ReportPath!=null) {
			return ReportPath;
		}
		else
		{
			throw new RuntimeException("Report Path not specified in the Config File");
		}
	}

	
}
