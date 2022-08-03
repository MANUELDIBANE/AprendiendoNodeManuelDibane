var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ADSI2364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-upsju/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'T9dGnXUyPxT7i5PwmmdupAUupsmFhW2jUcKjuz5Cq986Qbv6BqKkp9TGOnbeiKGL',
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