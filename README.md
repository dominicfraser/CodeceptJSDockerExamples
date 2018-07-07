This is a repository of examples of using [CodeceptJS](https://codecept.io/) in a Docker environment. Each directory aims to give a simple example of a different Docker setup, and should contain all the files needed to clone it and make it run.

#### Contents:

- [Selenium Standalone Firefox](./seleniumStandaloneFirefox)
- [Selenium Standalone Chrome](./seleniumStandaloneChrome)
  - A WebDriverIO helper running CodeceptJS tests against a Selenium image containing a Selenium Server and Chrome/Firefox
- [CodeceptJS container with Puppeteer](./dockerizedCodeceptJSPuppeteer)
- [CodeceptJS container with WebDriverIO and Selenium Standalone](./dockerizedCodeceptJSWebDriverIO)
- [CodeceptJS container with multiple helpers](./dockerizedCodeceptJSMultipleHelpers)
  - Dockerizing CodeceptJS so it does not need to be installed in your main application
- [How to extend Docker Compose files](./extendingComposeFiles)
  - A nice way to keep Compose files DRY

#### Linting:

For linting [eslint-config-skyscanner](https://github.com/Skyscanner/eslint-config-skyscanner ) has been used, along with [prettier](https://github.com/prettier/prettier). This is not included in each directory, if you wish to add it duplicate the [.eslintrc](.eslintrc) and [.prettierrc](.prettierrc) and run:

```sh
(
    export PKG=eslint-config-skyscanner;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev
    "$PKG@latest"
)
```
to setup eslint, and then the following to integrate prettier:
```sh
npm install -D eslint-config-prettier eslint-plugin-prettier prettier
```



