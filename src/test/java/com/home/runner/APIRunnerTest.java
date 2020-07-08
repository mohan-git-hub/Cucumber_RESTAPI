package com.home.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

//import com.home.util.APIBase;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions
		(
		features = "G:\\Mohan\\Selenium_Software\\WorkSpace\\Cucumber.REST_API\\src\\test\\java\\com\\home\\features"
		,glue= {"com.home.APIDefinitions"}
		,dryRun = false
		,monochrome = true
		,strict = true
		,format = {"pretty","html:test-output","json:cucumber_result/CreateUser.json"}
		,tags= {"@Regression"}
		,plugin= {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/RESTAPI_ExtentReports.html"}
		)


public class APIRunnerTest {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("G:\\Mohan\\Selenium_Software\\WorkSpace\\Cucumber.REST_API\\src\\test\\java\\com\\home\\config\\extent-config.xml"));
		Reporter.setSystemInfo("User Name", "Mohan");
		Reporter.setSystemInfo("Application Name", "REST API");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment","Home");
		Reporter.setTestRunnerOutput("Cucumber REST API Execution Report");
	}
}
