import { STATUS_CODE } from "../constants/statusCodes.js";

export class OAuthController {
  static async oauthViaFacebook(req, res) {
    try {
      const { code } = req.query;
      const { FACEBOOK_APP_ID, FACEBOOK_CLIENT_SECRET } = process.env;

      return res.redirect(
        `https://graph.facebook.com/v3.3/oauth/access_token?client_id=${FACEBOOK_APP_ID}&redirect_uri=http://localhost:5173/sign-in&client_secret=${FACEBOOK_CLIENT_SECRET}&code=${code}`
      );
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
