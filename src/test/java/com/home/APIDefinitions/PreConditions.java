package com.home.APIDefinitions;

import cucumber.api.java.*;
import cucumber.api.java8.En;

public class PreConditions {

	
	@Before(order=-1)
	public void RunBefore1() {
		System.out.println("Before Hooks 1");
	}

	@Before(order=0)
	public void RunBefore2() {
		System.out.println("Before Hooks 2");
	}
	
	
	@Before(order=1)
	public void RunBeforeScenario() {
		
		System.out.println("Scenario Started");
	}

	@After(order = 0)
	public void RunAfterScenario() {
		System.out.println("Scenario Ended");
	}

	@After(order = -1)
	public void RunAfterScenario1() {
		System.out.println("Scenario Ended After with minus -1");
	}

	@After(order = 1)
	public void RunAfterScenario2() {
		System.out.println("Scenario Ended after postive 1");
	}

}
