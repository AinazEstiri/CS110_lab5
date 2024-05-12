/**
 * "Uncamels" the given string, returns empty string on failure
 * @param str
 * @returns {string}
 */
export function uncamel(str) {
    if (typeof str !== 'string') {
        return ''
    } else {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(strr){ return strr.toUpperCase(); })
    }
}