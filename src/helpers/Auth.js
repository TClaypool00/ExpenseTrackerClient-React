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

export function tokenExpired(error) {
    if (error) {
        if (error.response.data.message === 'Expired token') {
            localStorage.removeItem('user');
            window.location.reload();
        }
    }
}