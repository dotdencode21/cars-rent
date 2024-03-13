export class AuthController {
  static signIn(req, res) {
    res.send("sign-in");
  }

  static signUp(req, res) {
    res.send("sign-up");
  }
}