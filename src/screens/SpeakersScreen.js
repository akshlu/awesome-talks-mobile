import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';
import { SPEAKERS_QUERY, SPEAKERS_QUERY_SEARCH } from '../net/queries';
import { loadMore } from '../services/loadMore';
import nonIdealState from '../hoc/nonIdealState';

class SpeakersScreen extends React.PureComponent {
    renderContent({ data, fetchMore, refetch, loading, networkStatus }) {
        const { props } = this;
        return (
            <SpeakerList
                loadingMore={networkStatus === NetworkStatus.fetchMore}
                refreshing={networkStatus === NetworkStatus.refetch}
                onEndReached={loadMore({
                    fetchMore,
                    connection: data,
                    fieldname: 'allSpeakerses'
                })}
                onEndReachedThreshold={0.5}
                onPullToRefresh={refetch}
                speakersList={data.allSpeakerses}
                navigator={props.navigator}
            />
        );
    }

    render() {
        const { props } = this;
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query
                    query={
                        props.search ? SPEAKERS_QUERY_SEARCH : SPEAKERS_QUERY
                    }
                    variables={{ search: props.search }}
                    notifyOnNetworkStatusChange
                >
                    {nonIdealState.call(this, this.renderContent.bind(this))}
                </Query>
            </ApolloProvider>
        );
    }
}

SpeakersScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    search: PropTypes.string
};

export default SpeakersScreen;
