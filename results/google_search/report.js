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
formatter.scenario({
  "line": 24,
  "name": "Search images for sex",
  "description": "",
  "id": "google.com-search-result-feature;search-images-for-sex",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sex"
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
  "name": "I click on image and search for Korean milf",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I verify korean milf appears on the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});