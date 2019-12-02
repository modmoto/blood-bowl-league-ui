export async function fetchJson(baseUrl, path) {
    const url = `${baseUrl}${path}`;

    try {
        let response = await fetch(url, { method: 'GET' });
        if (response.status !== 200) {
            window.store.dispatch({
                type: 'BACKEND_GET_CALL_FAILED',
                payload: {
                    result: {
                        type: 'notFound'
                    }
                }
            })
        }
        return await response.json();
    }

    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_GET_CALL_FAILED',
            payload: {
                result: {
                    type: 'unknown',
                    message: e.message,
                }
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

        const responseContent = await response.json();
        if (response.status !== 201 && response.status !== 200) {
            const problem = responseContent['problem-details'];
            window.store.dispatch({
                type: 'BACKEND_GET_CALL_FAILED',
                payload: {
                    result: {
                        type: 'validationError',
                        keys: problem,
                    }
                }
            })

            return null;
        }

        return responseContent;

    }
    catch (e) {
        window.store.dispatch({
            type: 'BACKEND_POST_CALL_FAILED',
            payload: {
                result: {
                    type: 'unknown',
                    message: e.message,
                }
            }
        })
    }

    return null;
}