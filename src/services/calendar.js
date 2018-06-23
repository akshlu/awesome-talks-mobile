/**
 * Get string representation of duration with hours and minutes
 * @param {Number} seconds
 * @returns {String} Duration in %h %m format
 */
export function getDurationString(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const durationSeconds = seconds % 60;
    const minutes = (seconds - durationSeconds) / 60;
    if (seconds < 3600) {
        return `${minutes}m`;
    }
    const minutesWithoutHours = minutes % 60;
    const hours = (minutes - minutesWithoutHours) / 60;
    return minutesWithoutHours === 0
        ? `${hours}h`
        : `${hours}h ${minutesWithoutHours}m`;
}
