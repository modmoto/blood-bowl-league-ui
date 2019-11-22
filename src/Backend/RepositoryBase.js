export async function fetchJson(baseUrl, path) {
    const url = `${baseUrl}${path}`;

    try {
        let response = await fetch(url, { method: 'GET' });
        if (response.status !== 200) {
            alert('notFound')
            // 404er loggen
        }
        return await response.json();
    }

    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_GET_CALL_FAILED',
            message: e.message
        })
    }
}

export async function sendJson(baseUrl, path, body) {
    const url = `${baseUrl}${path}`;

    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== 201 && response.status !== 200) {
            alert("error")
            // 400er etc loggen
        }

        return await response.json();

    }
    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_POST_CALL_FAILED',
            message: e.message
        })
    }

    return null;
}