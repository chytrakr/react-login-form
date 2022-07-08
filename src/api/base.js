import axios from 'axios';

export default function api(url, method='GET', data={}) {

	return new Promise(function(resolve, reject) {
	    const requestOptions = {
	    	url: url,
	        method: method,
	        headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': `Token ${localStorage.getItem('token')}`
	        },
	        data
	    };

	    axios(requestOptions)
	  	.then(function (response) {
			resolve(response.data);
	  	})
		.catch(function (error) {
			reject(error);
		});
	});
}
