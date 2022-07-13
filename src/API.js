import axios from "axios";

const apiBaseURL = 'http://localhost/BillTrackerAPI/api/';

export async function create(modelPath, model) {
    return axios.post(`${apiBaseURL}${modelPath}/create.php`, model);
}

export async function loginApi(model) {
    return axios.post(`${apiBaseURL}/users/login.php`, model)
}