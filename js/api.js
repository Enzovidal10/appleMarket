const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/john@gmail.com',
  headers: {
    'X-RapidAPI-Key': '227ed3b56cmshbd2014fdd15d3dcp1bf590jsn7be31c073ea4',
    'X-RapidAPI-Host': 'pozzad-email-validator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});