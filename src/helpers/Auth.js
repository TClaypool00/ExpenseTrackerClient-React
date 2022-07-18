const user = JSON.parse(localStorage.getItem('user'));

export function userLoggedIn() {
    return user ? true : false;
}

export function getUserId() {
    return user.userId;
}

export function userIsAdmin() {
    return user.isAdmin;
}

export function getUserFirstName() {
    return user.firstName;
}

export function getToken() {
    return user.token;
}