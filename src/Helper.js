export function showHide(nameofElement) {
    const loginForm = document.getElementById(nameofElement);

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}