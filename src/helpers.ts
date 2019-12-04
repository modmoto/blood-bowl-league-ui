import {ReduxActionsBase} from "./ReduxActionsBase";

export function getBrowserLanguage() {
    // @ts-ignore
    const language = window.navigator.userLanguage || window.navigator.language;
    if (!language) return null;

    const languagePart = language.split('-');
    if (languagePart.length >= 1) {
        return languagePart[0];
    }
    return null;
}

export function toAction(action: ReduxActionsBase) {
    return { type: action.type, payload: action.payload }
}