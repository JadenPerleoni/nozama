import EbayAuthToken from "ebay-oauth-nodejs-client";
import dotenv from "dotenv";
dotenv.config();

const ebayAuthToken = new EbayAuthToken({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

export async function getAuthToken() {
  const response = await ebayAuthToken.getApplicationToken("PRODUCTION");
  return JSON.parse(response).access_token;
}
