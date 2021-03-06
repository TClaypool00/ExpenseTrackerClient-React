export function getErrorMessage(error) {
    return error.response.data.message;
}

export function getSuccessMessage(success) {
    return success.data.message;
}

export function textFadeOut(message) {
    if (message.classList.contains('fade-out')) {
        message.classList.remove('fade-out');
    }

    message.classList.add('fade-out');

    setTimeout(function() {
        message.innerHTML = '';
    }, 5000)
}

export const title = 'Expense Tracker - ';