import axios from "axios";
import { getToken, getUserId } from "./helpers/Auth";

const apiBaseURL = 'http://localhost/BillTrackerAPI/api/';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': getToken()
}

export async function create(modelPath, model) {
    return axios.post(`${apiBaseURL}${modelPath}/create.php`, model, { headers: headers });
}

export async function loginApi(model) {
    return axios.post(`${apiBaseURL}users/login.php`, model)
}

export async function getEverything() {
    return axios.get(`${apiBaseURL}/all/get_all.php?userId=${getUserId()}`, { headers: headers })
}

export async function companyDropDown() {
    return axios.get(`${apiBaseURL}/companies/drop_down.php?userId=${getUserId()}`, {headers: headers})
}

export async function registerApi(model) {
    return axios.post(`${apiBaseURL}users/create.php`, model)
}