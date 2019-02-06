package test.java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleGlue {
	WebDriver driver;
	
	@Before
	public void before() throws Throwable{
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}
	
	@Given("^I get google\\.com$")
	public void i_get_google_com() throws Throwable {
		driver.get("https://google.com");
	}

	@When("^I click on image and search for cucumber$")
	public void i_click_on_image_and_search_for_cucumber() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I verify cucumber appears$")
	public void i_verify_cucumber_appears() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I search pokemon and click search$")
	public void i_search_pokemon_and_click_search() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I will see https://wikipedia\\.org/pokemon$")
	public void i_will_see_https_wikipedia_org_pokemon() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I search digimon and click search$")
	public void i_search_digimon_and_click_search() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I will see https://wikipedia\\.org/digimon$")
	public void i_will_see_https_wikipedia_org_digimon() throws Throwable {
		System.out.println("hello?");
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
		driver.quit();
	}
	
	@After
	public void after() throws Throwable {
		driver.close();
		driver.quit();
	}

}
