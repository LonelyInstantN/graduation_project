const request = require('request');

const options = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
  qs: {
    to: 'zh-cn',
    'api-version': '3.0',
    profanityAction: 'NoAction',
    textType: 'plain'
  },
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
    'x-rapidapi-key': '5636c00710mshd0fb87ce1e012c5p1fc0cejsn2efb494315b8',
    useQueryString: true
  },
  body: [{Text: 'I would really like to drive your car around the block a few times.'}],
  json: true
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body[0].translations);
});