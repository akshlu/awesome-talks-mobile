import React from 'react';
import { Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { NET_INFO } from '../net/queries';
import Loading from '../components/Loading';
import ServerError from '../components/ServerError';
import NoInternet from '../components/NoInternet';

function renderError(refetch) {
    return (
        <Query query={NET_INFO} notifyOnNetworkStatusChange>
            {({ data }) => {
                if (data.isConnected) {
                    return <ServerError refetch={() => refetch()} />;
                }
                return <NoInternet refetch={() => refetch()} />;
            }}
        </Query>
    );
}

const nonIdealState = (children) => (props) => {
    const { loading, error, data, fetchMore, refetch, networkStatus } = props;
    if (
        loading &&
        networkStatus !== NetworkStatus.fetchMore &&
        networkStatus !== NetworkStatus.refetch
    ) {
        return <Loading />;
    }
    if (error) {
        return renderError(refetch);
    }
    return children({
        loading,
        error,
        data,
        fetchMore,
        refetch,
        networkStatus
    });
};

export default nonIdealState;
