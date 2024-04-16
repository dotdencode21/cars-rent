import axios from "axios";

export class OAuthService {
  static async #getAccessToken(code) {
    try {
      const {
        data: { access_token },
      } = await axios.get(
        `http://localhost:5000/api/oauth/facebook?code=${code}`
      );

      localStorage.setItem("access_token", JSON.stringify(access_token));

      return access_token;
    } catch (e) {
      throw e;
    }
  }

  static async #getUserId(accessToken) {
    try {
      const {
        data: { id },
      } = await axios.get(
        `https://graph.facebook.com/v19.0/me?access_token=${accessToken}`
      );

      return id;
    } catch (e) {
      throw e;
    }
  }

  static async #getUserDetails(userId, accessToken) {
    try {
      const { data } = await axios.get(
        `https://graph.facebook.com/${userId}?fields=name,email,gender,birthday&access_token=${accessToken}`
      );

      return data;
    } catch (e) {
      throw e;
    }
  }

  static async oauthViaFacebook(code) {
    try {
      const accessToken = await this.#getAccessToken(code);
      const userId = await this.#getUserId(accessToken);
      const user = await this.#getUserDetails(userId, accessToken);

      return user;
    } catch (e) {
      throw e;
    }
  }
}
