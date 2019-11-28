export async function fetchJson(baseUrl, path) {
    const url = `${baseUrl}${path}`;

    try {
        let response = await fetch(url, { method: 'GET' });
        if (response.status !== 200) {
            window.store.dispatch({
                type: 'BACKEND_GET_CALL_FAILED',
                result: {
                    type: 'notFound'
                }
            })
        }
        return await response.json();
    }

    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_GET_CALL_FAILED',
            result: {
                type: 'unknown',
                message: e.message,
            }
        })
    }
}

export async function sendJson(baseUrl, path, body) {
    const url = `${baseUrl}${path}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== 201 && response.status !== 200) {
            const problems = await response.json();
            window.store.dispatch({
                type: 'BACKEND_GET_CALL_FAILED',
                result: {
                    type: 'validationError',
                    keys: problems.problemDetails,
                }
            })
        }

        return await response.json();

    }
    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_POST_CALL_FAILED',
            result: {
                type: 'unknown',
                message: e.message,
            }
        })
    }

    return null;
}