const user = JSON.parse(localStorage.getItem('user'));

export function userLoggedIn() {
    return user ? true : false;
}

export function getUserId() {
    return user ? user.userId : null;
}

export function userIsAdmin() {
    return user ? user.isAdmin : null;
}

export function getUserFirstName() {
    return user ? user.firstName : null;
}

export function getToken() {
    return user ? user.token : null;
}