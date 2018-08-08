'use strict';

/**
 * egg-oidc-provider default config
 * @member Config#oidcProvider
 * @property {String} SOME_KEY - some description
 */

exports.oidcProvider = {
  issuer: "http://localhost:3000",
  formats: {
    default: 'opaque',
    AccessToken: 'jwt',
  },
  features: {
    claimsParameter: true,
    conformIdTokenClaims: true,
    discovery: true,
    encryption: true,
    introspection: true,
    registration: true,
    oauthNativeApps: true,
    request: true,
    revocation: true,
    sessionManagement: false,
    devInteractions: false,
    pkce: {forcedForNative: true},
  }
};
