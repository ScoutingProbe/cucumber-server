mvn clean test -DCucumberOptions="--glue test.java --plugin json:results/google_search.json --plugin html:results/google_search test/resources/google_search.feature"
mvn clean install test