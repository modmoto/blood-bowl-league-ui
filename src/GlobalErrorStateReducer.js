export default function globalErrorStateReducer(state = {
    errorOccured: false,
    message: null
}, action) {
    switch (action.type) {
        case 'BACKEND_GET_CALL_FAILED':
            return {
                ...state,
                errorOccured: true,
                message: action.message,
                result: action.result
            };
        case 'BACKEND_POST_CALL_FAILED':
            return {
                ...state,
                errorOccured: true,
                message: action.message,
                result: action.result
            };

        default:
            return state
   }
}