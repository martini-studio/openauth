/**
 * Use this provider to authenticate with Apple. Supports both OAuth2 and OIDC.
 *
 * #### Using OAuth
 *
 * ```ts {5-8}
 * import { AppleProvider } from "@openauthjs/openauth/provider/apple"
 *
 * export default issuer({
 *   providers: {
 *     apple: AppleProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321"
 *     })
 *   }
 * })
 * ```
 *
 * #### Using OAuth with form_post response mode
 *
 * When requesting name or email scopes from Apple, you must use form_post response mode:
 *
 * ```ts {5-9}
 * import { AppleProvider } from "@openauthjs/openauth/provider/apple"
 *
 * export default issuer({
 *   providers: {
 *     apple: AppleProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321",
 *       responseMode: "form_post"
 *     })
 *   }
 * })
 * ```
 *
 * #### Using OIDC
 *
 * ```ts {5-7}
 * import { AppleOidcProvider } from "@openauthjs/openauth/provider/apple"
 *
 * export default issuer({
 *   providers: {
 *     apple: AppleOidcProvider({
 *       clientID: "1234567890"
 *     })
 *   }
 * })
 * ```
 *
 * @packageDocumentation
 */
import { Oauth2WrappedConfig } from "./oauth2.js";
import { OidcWrappedConfig } from "./oidc.js";
export interface AppleConfig extends Oauth2WrappedConfig {
    /**
     * The response mode to use for the authorization request.
     * Apple requires 'form_post' response mode when requesting name or email scopes.
     * @default "query"
     */
    responseMode?: "query" | "form_post";
}
export interface AppleOidcConfig extends OidcWrappedConfig {
}
/**
 * Create an Apple OAuth2 provider.
 *
 * @param config - The config for the provider.
 * @example
 * ```ts
 * // Using default query response mode (GET callback)
 * AppleProvider({
 *   clientID: "1234567890",
 *   clientSecret: "0987654321"
 * })
 *
 * // Using form_post response mode (POST callback)
 * // Required when requesting name or email scope
 * AppleProvider({
 *   clientID: "1234567890",
 *   clientSecret: "0987654321",
 *   responseMode: "form_post",
 *   scopes: ["name", "email"]
 * })
 * ```
 */
export declare function AppleProvider(config: AppleConfig): import("./provider.js").Provider<{
    tokenset: import("./oauth2.js").Oauth2Token;
    clientID: string;
}>;
/**
 * Create an Apple OIDC provider.
 *
 * This is useful if you just want to verify the user's email address.
 *
 * @param config - The config for the provider.
 * @example
 * ```ts
 * AppleOidcProvider({
 *   clientID: "1234567890"
 * })
 * ```
 */
export declare function AppleOidcProvider(config: AppleOidcConfig): import("./provider.js").Provider<{
    id: import("hono/utils/jwt/types").JWTPayload;
    clientID: string;
}>;
//# sourceMappingURL=apple.d.ts.map