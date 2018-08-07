/**
 * Debounce function call
 * @param {Function} fn
 * @param {Number} ms
 * @returns {void}
 */
export function debounce(fn, ms) {
    let timer = null;

    return function(...args) {
        const onComplete = () => {
            fn.apply(this, args);
            timer = null;
        };

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    };
}
