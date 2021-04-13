import { use, serializeUser, deserializeUser } from 'passport';
import { Strategy } from 'passport-google-oauth2';

export class GoogleStrategy {
  public init() {
    const GOOGLE_CLIENT_ID = '';
    const GOOGLE_CLIENT_SECRET = '';

    use(new Strategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback: true,
    },
      function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }));

    serializeUser(function (user, done) {
      done(null, user);
    });

    deserializeUser(function (user: Express.User, done) {
      done(null, user);
    });
  }
}