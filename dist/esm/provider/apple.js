// src/provider/apple.ts
import { Oauth2Provider } from "./oauth2.js";
import { OidcProvider } from "./oidc.js";
function AppleProvider(config) {
  const { responseMode, ...restConfig } = config;
  const additionalQuery = responseMode === "form_post" ? { response_mode: "form_post", ...config.query } : config.query || {};
  return Oauth2Provider({
    ...restConfig,
    type: "apple",
    endpoint: {
      authorization: "https://appleid.apple.com/auth/authorize",
      token: "https://appleid.apple.com/auth/token",
      jwks: "https://appleid.apple.com/auth/keys"
    },
    query: additionalQuery
  });
}
function AppleOidcProvider(config) {
  return OidcProvider({
    ...config,
    type: "apple",
    issuer: "https://appleid.apple.com"
  });
}
export {
  AppleProvider,
  AppleOidcProvider
};
