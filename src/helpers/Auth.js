export function userLoggedIn() {
    return localStorage.getItem('user') ? true : false;
}

export function logout() {
    localStorage.removeItem('user');
}