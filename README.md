This is a repository of examples of using [CodeceptJS](https://codecept.io/) in a Docker environment. Each directory aims to give a simple example of a different Docker setup, and should contain all the files needed to clone it and make it run.

For linting [eslint-config-skyscanner](https://github.com/Skyscanner/eslint-config-skyscanner ) has been used, along with [prettier](https://github.com/prettier/prettier). This is not included in each directory, if you wish to add it duplicate the [.eslintrc](.eslintrc) and [.prettierrc](.prettierrc) and run:

```sh
(
    export PKG=eslint-config-skyscanner;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev
    "$PKG@latest"
)
```
then 
```sh
npm install eslint-config-prettier eslint-plugin-prettier prettier
```


