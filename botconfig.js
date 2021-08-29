module.exports = {
  Admins: ["325446273106837505"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ";", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/EPQqt3VP", //Support Server Link
  Token: process.env.Token || "ODgxMzEyODU2NjczNTE3NTk5.YSrAjw.RR1nXcX41Zk_zNEcaPMJwAJw6rI", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "881312856673517599", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "2aQvj06FQjKTbNLA-mOn7VnjS62blIZ6", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands", "Administrator"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "c57a4120b9b1498e8145d82b56c39f5f", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "c6db5f85e52a4886be49868f936bef7c", //Spotify Client Secret
  },
};
