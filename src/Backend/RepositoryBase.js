const BackendUrl = 'https://seasons-readhost.herokuapp.com/api'

export async function fetchJson(path) {
    const url = `${BackendUrl}${path}`;

    let response = await fetch(url, { method: 'GET' });
    let object = await response.json();
    return object;
}

export async function sendJson(path, body) {
    const url = `${BackendUrl}${path}`;

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (response.status !== 201) return null;
    return await response.json();
}