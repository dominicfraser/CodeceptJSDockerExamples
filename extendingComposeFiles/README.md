
Docker Compose supports extending a compose file for different environments or different workflows.

This allows you to share common configuration and minimise the risk of configurations going out of sync.

Here we look at [extending an entire Compose file by using multiple Compose files](https://docs.docker.com/compose/extends/).

If we look at `docker-compose.yml` and `docker-compose.old-way.yml` we can see they both use the `express-app` service, with `old-way` adding some additional configuration. 

As seen in [dockerizedCodeceptJSPuppeteer](../dockerizedCodeceptJSPuppeteer) the command

`docker-compose -f docker-compose.old-way.yml run --rm codeceptjs-container`

would be used to run the file for testing.

Using composition we can make the code more DRY. As seen in `docker-compose.new-way.yml` we simply layer on top of `docker-compose.yml` and only add the new service information.

We can then run `new-way` using:

`docker-compose -f docker-compose.yml -f docker-compose.new-way.yml run --rm codeceptjs-container`

This is optional, and not included in the other examples to introduce concepts one at a time, but recommended.
