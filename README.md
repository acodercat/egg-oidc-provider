# egg-oidc-provider

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-oidc-provider.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-oidc-provider
[travis-image]: https://img.shields.io/travis/eggjs/egg-oidc-provider.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-oidc-provider
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-oidc-provider.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-oidc-provider?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-oidc-provider.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-oidc-provider
[snyk-image]: https://snyk.io/test/npm/egg-oidc-provider/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-oidc-provider
[download-image]: https://img.shields.io/npm/dm/egg-oidc-provider.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-oidc-provider

<!--
Description here.
-->

## Install

```bash
$ npm i egg-oidc-provider --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.oidcProvider = {
  enable: true,
  package: 'egg-oidc-provider',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.oidcProvider = {
  
};
```

## License

[MIT](LICENSE)
