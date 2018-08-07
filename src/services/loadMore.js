import makeDebounce from './debounce';

/**
 * Will modify query and returns function to call it
 * @param {LoadMoreConfig} loadMoreConfig
 * @returns {Function}
 */
export function loadMore({ connection, fetchMore, fieldname, debounce }) {
    const skip = connection[fieldname].length;
    const loadFn = () =>
        fetchMore({
            variables: {
                skip
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const data = fetchMoreResult[fieldname];

                if (!fetchMoreResult || !data) return previousResult;
                return {
                    __typename: previousResult.__typename,
                    [fieldname]: [...previousResult[fieldname], ...data]
                };
            }
        });
    if (typeof debounce === 'number' && debounce > 0) {
        return makeDebounce(loadFn, debounce);
    }
    return loadFn;
}

/**
 * @typedef LoadMoreConfig
 * @property {Object} connection object contains loaded data
 * @property {Function} fetchMore function to load more data, passed from ApolloClient
 * @property {String} fieldname name of field contains data edges
 * @property {Number} debounce count of milliseconds of debounce
 */
