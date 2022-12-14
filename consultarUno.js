var axios = require('axios');
var data = JSON.stringify({
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ADSI2364481",
    "projection": {
        "_id": 1001686431
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-upsju/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '<API_KEY>',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });