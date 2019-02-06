$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/google_search.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Google.com search result feature",
  "description": "I will search for pokemon and digimon wikipedia anchors with scenario outline.",
  "id": "google.com-search-result-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@google"
    }
  ]
});
formatter.before({
  "duration": 8031259200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search images for cucumber",
  "description": "",
  "id": "google.com-search-result-feature;search-images-for-cucumber",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@cucumber"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I get google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on image and search for cucumber",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I verify cucumber appears",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleGlue.i_get_google_com()"
});
formatter.result({
  "duration": 1962579500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_click_on_image_and_search_for_cucumber()"
});
formatter.result({
  "duration": 202900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_verify_cucumber_appears()"
});
formatter.result({
  "duration": 117800,
  "status": "passed"
});
formatter.after({
  "duration": 1138744600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Search monster anime wikipedia anchors",
  "description": "",
  "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@anime"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I get google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I search \u003cmonster\u003e and click search",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I will see \u003canchor\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;",
  "rows": [
    {
      "cells": [
        "monster",
        "anchor"
      ],
      "line": 36,
      "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;;1"
    },
    {
      "cells": [
        "pokemon",
        "https://wikipedia.org/pokemon"
      ],
      "line": 37,
      "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;;2"
    },
    {
      "cells": [
        "digimon",
        "https://wikipedia.org/digimon"
      ],
      "line": 38,
      "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3494788300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search monster anime wikipedia anchors",
  "description": "",
  "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@anime"
    },
    {
      "line": 19,
      "name": "@google"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I get google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I search pokemon and click search",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I will see https://wikipedia.org/pokemon",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleGlue.i_get_google_com()"
});
formatter.result({
  "duration": 1382316900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_search_pokemon_and_click_search()"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_will_see_https_wikipedia_org_pokemon()"
});
formatter.result({
  "duration": 383600,
  "status": "passed"
});
formatter.after({
  "duration": 2789585200,
  "status": "passed"
});
formatter.before({
  "duration": 3568586600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search monster anime wikipedia anchors",
  "description": "",
  "id": "google.com-search-result-feature;search-monster-anime-wikipedia-anchors;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@anime"
    },
    {
      "line": 19,
      "name": "@google"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I get google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I search digimon and click search",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I will see https://wikipedia.org/digimon",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleGlue.i_get_google_com()"
});
formatter.result({
  "duration": 1239920400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_search_digimon_and_click_search()"
});
formatter.result({
  "duration": 106200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleGlue.i_will_see_https_wikipedia_org_digimon()"
});
formatter.result({
  "duration": 861830900,
  "status": "passed"
});
formatter.after({
  "duration": 15224900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-0FGEPA9\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat test.java.GoogleGlue.after(GoogleGlue.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});