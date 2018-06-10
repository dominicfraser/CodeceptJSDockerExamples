This example shows how to use the [CodeceptJS Docker image](https://github.com/Codeception/CodeceptJS/blob/master/Dockerfile) as described in the [docs](https://codecept.io/docker/) so that it is not necessary to install it as a dependency in your application.

The CodeceptJS image comes with the Nightmare, Protractor, Puppeteer, and WebDriverIO drivers and can execute CodeceptJS with Puppeteer or Nightmare locally with no extra configuration. This example uses WebDriverIO, and so a Selenium Server is needed to run the browser (in this case Firefox Standalone specifically).

Here there are two Docker Compose files, one to run the app for development (docker-compose.yml), that will allow you to view the Express app at http://localhost:3000 in your browser, and one to run the CodeceptJS tests (docker-compose.test.yml). 

Unlike when running CodeceptJS as an application dependency, where `docker exec -it <commands>` would be use to enter the application container and run the tests, when the CodeceptJS container is ran it will immediately execute tests based on the configuration file specified. If none is specified then it will look for `codecept.json` or `codecept.conf.js` and error and exit if neither is found.

The CodeceptJS container is set to [depend on](https://docs.docker.com/compose/compose-file/compose-file-v2/#depends_on) the Express application container, with a [healthcheck](https://docs.docker.com/compose/compose-file/compose-file-v2/#healthcheck) specified so that tests do not begin before the container is ready. In this simple example this is not fully necessary, but when a more complex application is used this may be essential to give it time to start up.

To run the app for development use:

`docker-compose up --build`

It is possible to run the tests with the below command while the app is already running, and the app will continue to run afterwards unless `docker-compose down` is explicitly used.

To run the tests, either with the app already running or from cold, use:

`docker-compose -f docker-compose.test.yml run --rm codeceptjs-container`

This will run the tests then stop codeceptjs-container. `docker-compose down` will be necessary to stop express-app when you wish to do so. 
