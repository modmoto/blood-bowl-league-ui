export default function globalErrorStateReducer(state = {
    errorOccured: false,
    message: null
}, action) {

    function actionObject(action) {
        return {
            ...state,
            errorOccured: true,
            message: action.message,
            result: action.result
        };
    }

    switch (action.type) {
        case 'BACKEND_GET_CALL_FAILED':
            return actionObject(action);
        case 'BACKEND_POST_CALL_FAILED':
            return actionObject(action);
        case 'GLOBAL_ERROR_DISMISSED':
            return {
                ...state,
                errorOccured: false
            };

        default:
            return state
   }
}