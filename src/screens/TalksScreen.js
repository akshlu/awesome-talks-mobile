import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { getApolloClient } from '../net/graphqlClient';
import TalksList from '../components/TalkList';
import { TALKS_QUERY, TALKS_QUERY_SEARCH } from '../net/queries';
import { loadMore } from '../services/loadMore';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

class TalksScreen extends React.PureComponent {
    render() {
        const { props } = this;
        const { search } = props;
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query
                    query={
                        search && search.length > 0
                            ? TALKS_QUERY_SEARCH
                            : TALKS_QUERY
                    }
                    variables={{ search }}
                    notifyOnNetworkStatusChange
                >
                    {({
                        loading,
                        error,
                        data,
                        fetchMore,
                        refetch,
                        networkStatus
                    }) => {
                        if (
                            loading &&
                            networkStatus !== NetworkStatus.fetchMore &&
                            networkStatus !== NetworkStatus.refetch
                        ) {
                            return <Loading />;
                        }
                        if (error) {
                            return (
                                <ErrorMessage text="Sorry, nothing works:(" />
                            );
                        }
                        if (!data.allVideoses) {
                            return null;
                        }
                        return (
                            <TalksList
                                loadingMore={
                                    networkStatus === NetworkStatus.fetchMore
                                }
                                refreshing={
                                    networkStatus === NetworkStatus.refetch
                                }
                                onEndReached={loadMore({
                                    fetchMore,
                                    connection: data,
                                    fieldname: 'allVideoses'
                                })}
                                talksList={data.allVideoses}
                                navigator={props.navigator}
                                onPullToRefresh={refetch}
                            />
                        );
                    }}
                </Query>
            </ApolloProvider>
        );
    }
}

TalksScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default TalksScreen;
