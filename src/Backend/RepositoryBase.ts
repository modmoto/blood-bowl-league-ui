import {toAction} from "../helpers";
import {
    BackenGetCallFailedAction, BackenPostCallFailedAction,
    NotFoundResponse,
    UnknownErrorResponse,
    ValidationErrorResponse
} from "../GlobalErrorStateReducer";

export async function fetchJson(baseUrl: string, path: string) {
    const url = `${baseUrl}${path}`;

    try {
        let response = await fetch(url, { method: 'GET' });
        if (response.status !== 200) {
            // @ts-ignore
            window.store.dispatch(toAction(new BackenGetCallFailedAction(new NotFoundResponse())))
        }
        return await response.json();
    }

    catch (e) {
        // @ts-ignore
        window.store.dispatch(toAction(new BackenGetCallFailedAction(new UnknownErrorResponse(e.measureText()))))
    }
}

export async function sendJson(baseUrl: string, path: string, body:any) {
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
            // @ts-ignore
            window.store.dispatch(toAction(new BackenPostCallFailedAction(new ValidationErrorResponse(problem))))

            return null;
        }

        return responseContent;

    }
    catch (e) {
        // @ts-ignore
        window.store.dispatch(toAction(new BackenPostCallFailedAction(new UnknownErrorResponse(e.measureText()))))
    }

    return null;
}