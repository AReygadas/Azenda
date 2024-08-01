import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5703/api/v1/';
// axios.defaults.baseURL = 'http://localhost:5703/api/v1/user/singin';

axios.defaults.withCredentials = false;

// axios.create({
//     headers:{
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Credentials": true,        
//     }
// });

//Add a request interceptortrue 
axios.interceptors.request.use((config) => {
	return config;
}, function (error) {
	console.log("Request Error", error)
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	const { data } = response;
	if (data && data.isValid === false) {
		return Promise.reject(data);
	}
	return data;
}, function (error) {
	if (error.response && error.response.status === 0) {
        console.error("Possible CORS error:", error);
    }
    return Promise.reject(error);
});
// Export modules 
export default {
	// On create app export the providers
	install(app) {
		// provide expose to global app this functions 	    	
		app.provide('Get', (path) => axios.get(path))
		app.provide('Post', (path, payload) => {
			if (typeof (payload) === 'string') {
				return axios.post(path, "${payload}");
			} else {
				return axios.post(path, payload);
			}
		});

		app.provide('postAndFiles', (path, formData) => {
			return axios.post(path, formData,
				{ headers: { 'Content-Type': 'multipart/form-data' } })
		});

		app.provide('downloadFile', (path) => axios({
			url: path,
			method: 'GET',
			responseType: 'blob' //important
		}));

		app.provide('postAndDownload', (path, formData) => {
			return axios.post(path, formData, {
			  headers: { 'Content-Type': 'multipart/form-data' },
			  responseType: 'blob' // Configura el responseType a 'blob'
			});
		  });
		  
		//  app.provide('PostAndDownload', (path, payload) => axios({
		// 	url: path,
		// 	method: 'POST',
		// 	responseType: 'blob' //important
		// 	return axios.post(path, payload);
		// }));
	}
};