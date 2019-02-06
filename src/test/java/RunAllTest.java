package test.java;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources",
		glue="test.java")
//		plugin= {"json:results/feature.json", "json:/results/google_search.json", 
//				"html:results/feature", "html:results/feature.json"}) 
//TODO
// @Date 3 February 2019
// How to use json and html plugin for multiple features?
public class RunAllTest {

}
