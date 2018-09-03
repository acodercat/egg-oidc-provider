'use strict';

/**
 * egg-oidc-provider default config
 * @member Config#oidcProvider
 * @property {String} SOME_KEY - some description
 */

exports.oidcProvider = {
  formats: {
    default: 'opaque',
    AccessToken: 'jwt',
  },
  features: {
    introspection: true,
    registration: true,
    revocation: true,
    sessionManagement: false,
    devInteractions: false,
  }
};