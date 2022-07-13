const apiBaseURL = 'http://localhost/BillTrackerAPI/api/';

export async function create(modelPath, model) {
    const response = await fetch(apiBaseURL + '/' + modelPath + '/create.php', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(model)
    });

    return await response.json();
}