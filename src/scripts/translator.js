/* eslint-disable no-unused-vars */

const http = require("https");

async function translate(text,callback) {

  const options = {
    "method": "POST",
    "hostname": "microsoft-translator-text.p.rapidapi.com",
    "port": null,
    "path": "/translate?to=zh-cn&api-version=3.0&from=en-us&profanityAction=NoAction&textType=plain",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
      "x-rapidapi-key": "5636c00710mshd0fb87ce1e012c5p1fc0cejsn2efb494315b8",
      "useQueryString": true
    }
  };

  const req = http.request(options, function (res) {
    const chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      const body = Buffer.concat(chunks);
      callback(JSON.parse(body.toString())[0].translations[0].text);
    });
  });

  
  req.write(JSON.stringify([{Text: text}]));
  req.end();

  
  
}

export default{
  translate
}
