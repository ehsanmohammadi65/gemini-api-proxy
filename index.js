const axios = require("axios");
const { SocksProxyAgent } = require("socks-proxy-agent");
//proxy address if socks5 replace socks5
const proxy = "socks://127.0.0.1:2080";
const agent = new SocksProxyAgent(proxy);
//gemini Api
const token = "xxxx";

//API URL
const apiUrl =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
  token;
token;

// send data response
const data = {
  contents: [
    {
      parts: [
        {
          text: "Tell me a story that really happened in the world ",
        },
      ],
    },
  ],
};

//send request by proxy
axios
  .post(apiUrl, data, {
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "UTF-8",
    },
    //add proxy https
    httpsAgent: agent,
  })
  .then((response) => {
    console.log(
      "Response from API:",
      response.data.candidates[0].content.parts[0].text
    );
  })
  .catch((error) => {
    console.error("Error connecting to API:", error.response);
  });
