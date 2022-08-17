var axios = require('axios');
var data = JSON.stringify({
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ADSI2364481",
    "documents": [{"nombre" : "robert","cedula" : 1234567,"edad": 17 },
                    {"nombre" : "rolo","cedula" : 123456,"edad": 17 }]
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-upsju/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'loqW25QdfN5YaJuLrzh1HLqIB7gsr4W9dyWepJlbPdlmdSLXZqqaWslkJxNjhx6U',
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