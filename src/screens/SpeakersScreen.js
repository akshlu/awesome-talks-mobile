import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';
import { SPEAKERS_QUERY } from '../net/queries';
import { loadMore } from '../services/loadMore';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const SpeakersScreen = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={SPEAKERS_QUERY} notifyOnNetworkStatusChange>
            {({ loading, error, data, fetchMore, refetch, networkStatus }) => {
                if (
                    loading &&
                    networkStatus !== NetworkStatus.fetchMore &&
                    networkStatus !== NetworkStatus.refetch
                ) {
                    return <Loading />;
                }
                if (error) {
                    return <ErrorMessage text="Sorry, nothing works:(" />;
                }
                if (!data.allSpeakerses) {
                    return null;
                }
                return (
                    <SpeakerList
                        loadingMore={networkStatus === NetworkStatus.fetchMore}
                        refreshing={loading}
                        onEndReached={loadMore({
                            fetchMore,
                            connection: data,
                            fieldname: 'allSpeakerses'
                        })}
                        onPullToRefresh={refetch}
                        speakersList={data.allSpeakerses}
                        navigator={props.navigator}
                    />
                );
            }}
        </Query>
    </ApolloProvider>
);

SpeakersScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default SpeakersScreen;
