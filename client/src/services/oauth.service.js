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

      console.log(data);

      return data;
    } catch (e) {
      throw e;
    }
  }

  static oauthViaFacebook(code) {
    try {
      this.#getAccessToken(code).then((accessToken) => {
        this.#getUserId(accessToken).then((userId) => {
          this.#getUserDetails(userId, accessToken).then((data) => {
            console.log(data);
            return data;
          });
        });
      });
    } catch (e) {
      throw e;
    }
  }
}
