export function getBrowserLanguage() {
    const language = window.navigator.userLanguage || window.navigator.language;
    if (!language) return null

    const languagePart = language.split('-')
    if (languagePart.length >= 1) {
        return languagePart[0]
    }
    return null
}

export function toAction(action) {
    return { type: action.type, payload: action.payload }
}