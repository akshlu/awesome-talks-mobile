/**
 * Get string representation of duration with hours and minutes
 * @param {Number} seconds
 * @returns {String} Duration in %h %m format
 */
export function getDurationString(seconds) {
    if (typeof seconds !== 'number') return null;
    if (seconds < 60) {
        const zeroAdd = seconds < 10 ? '0' : '';
        return `00:${zeroAdd}${seconds}`;
    }
    const durationSeconds = seconds % 60;
    const secondsZeroAdd = durationSeconds < 10 ? '0' : '';
    const minutes = (seconds - durationSeconds) / 60;
    let minutesZeroAdd = minutes < 10 ? '0' : '';
    if (seconds < 3600) {
        return `${minutesZeroAdd}${minutes}:${secondsZeroAdd}${durationSeconds}`;
    }
    const minutesWithoutHours = minutes % 60;
    minutesZeroAdd = minutesWithoutHours < 10 ? '0' : '';
    const hours = (minutes - minutesWithoutHours) / 60;
    return `${hours}:${minutesZeroAdd}${minutesWithoutHours}:${secondsZeroAdd}${durationSeconds}`;
}
