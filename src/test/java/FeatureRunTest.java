package test.java;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/feature.feature",
		glue="src.test.java",
		plugin= {"json:results/feature.json", "html:results/feature"})
public class FeatureRunTest {

}
