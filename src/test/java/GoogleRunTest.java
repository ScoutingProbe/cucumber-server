package test.java;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src/test/resources/google_search.feature",
	glue= "test.java",
	plugin= {"json:results/google_search.json", "html:results/google_search"})
public class GoogleRunTest {

}
