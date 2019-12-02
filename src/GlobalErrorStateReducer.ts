export default function globalErrorStateReducer(state = initialState, action: GlobalStateActionTypes): GlobalState {

    function actionObject(action: GlobalStateActionTypes): GlobalState {
        return {
            ...state,
            errorOccured: true,
            message: action.payload.message,
            result: action.payload.result
        };
    }

    switch (action.type) {
        case BACKEND_GET_CALL_FAILED:
            return actionObject(action);
        case BACKEND_POST_CALL_FAILED:
            return actionObject(action);
        case GLOBAL_ERROR_DISMISSED:
            return {
                ...state,
                errorOccured: false
            };

        default:
            return state
   }
}


export interface GlobalState {
    message: string,
    result: ResultObject,
    errorOccured: boolean
}

const initialState: GlobalState = {
    errorOccured: false,
    message: '',
    result: {
        type: 'Unknown Error',
        message: 'undefined',
        keys: []
    }
};

export const BACKEND_GET_CALL_FAILED = 'BACKEND_GET_CALL_FAILED';
export const BACKEND_POST_CALL_FAILED = 'BACKEND_POST_CALL_FAILED';
export const GLOBAL_ERROR_DISMISSED = 'GLOBAL_ERROR_DISMISSED';

export interface ReduxActionsBase {
    readonly type: string;
    readonly payload: any;
}

export class ValidationDetails {
    constructor(detail: string, type: string) {
        this.detail = detail;
        this.type = type;
    }

    readonly detail: string;
    readonly type: string;
}

export class ResultObject {
    constructor(message: string, type: string, keys: ValidationDetails[]) {
        this.type = type;
        this.message = message;
        this.keys = keys;
    }

    readonly keys: ValidationDetails[];
    readonly message: string;
    readonly type: string;
}

class ErrorResponse {
    constructor(message: string, result: ResultObject) {
        this.result = result;
        this.message = message;
    }

    readonly result: ResultObject;
    readonly message: string;
}

abstract class ErrorActionBase implements ReduxActionsBase{
    constructor(response: ErrorResponse) {
        this.payload = response;
    }

    readonly payload: ErrorResponse;
    abstract type: string;
}

export class BackenGetCallFailedAction extends ErrorActionBase{
    readonly type: typeof BACKEND_GET_CALL_FAILED = BACKEND_GET_CALL_FAILED;
}

export class BackenPostCallFailedAction extends ErrorActionBase{
    readonly type: typeof BACKEND_POST_CALL_FAILED = BACKEND_POST_CALL_FAILED;
}

export class GlobalErrorDismissedAction extends ErrorActionBase{
    constructor() {
        super(new ErrorResponse('Undefined', new ResultObject('Undefined', 'undefined', [])));
    }
    readonly type: typeof GLOBAL_ERROR_DISMISSED = GLOBAL_ERROR_DISMISSED;
}

type GlobalStateActionTypes = GlobalErrorDismissedAction | BackenPostCallFailedAction | BackenGetCallFailedAction