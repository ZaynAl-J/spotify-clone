export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "1404247b700d45049c02d53aaa597e52";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

console.log("URL");
console.log(loginUrl);
// The authEndpoint is the URL where we need to authenticate using Spotify. All Spotify Authentication requests must be passed through this URL.
// The redirectUri is the one which we gave in the Spotify Web API settings, this states where to take back the user if the Spotify login was successful.
// The clientId is the Client ID provided to you by the Spotify Web API and you need to mention it here.
// scopes are basically permissions which you need to ask Spotify for. More such permissions are available on Spotify API Documentation.
// The loginUrl is the final URL which needs to be called in order to authorize an user for our Spotify Clone app. This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.