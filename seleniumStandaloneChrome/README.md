This example uses the selenium/standalone-chrome image available from [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) and a ['Hello World' Express server](https://expressjs.com/en/starter/hello-world.html) that simply displays 'Hello World' on port 3000 when ran.

To run the tests open two terminal windows and run:

1. `docker-compose up --build`
2. `docker exec -it app-express npm run test:e2e`
