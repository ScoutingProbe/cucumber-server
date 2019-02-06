#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@google
Feature: Google.com search result feature
	I will search for pokemon and digimon wikipedia anchors with scenario outline. 

  @cucumber
  Scenario: Search images for cucumber
    Given I get google.com
    When I click on image and search for cucumber
    Then I verify cucumber appears

  @anime
  Scenario Outline: Search monster anime wikipedia anchors
    Given I get google.com
    When I search <monster> and click search
    Then I will see <anchor>
    
    Examples:
    	| monster			| anchor												|
    	| pokemon			| https://wikipedia.org/pokemon	|																							
    	| digimon			| https://wikipedia.org/digimon	|
