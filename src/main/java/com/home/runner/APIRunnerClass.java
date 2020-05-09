package com.home.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
		(
		features = "G:\\Mohan\\Selenium_Software\\WorkSpace\\Cucumber.REST_API\\src\\main\\java\\com\\home\\features\\CreateUser.feature"
		,glue= {"com.home.APIDefinitions"}
		,dryRun = false
		,monochrome = true
		,strict = true
		,format = {"pretty","html:test-output","json:cucumber_result/CreateUser.json"}
		,tags= {"@Smoke","@Regression", "~@End2End"}
		)

public class APIRunnerClass {
}
