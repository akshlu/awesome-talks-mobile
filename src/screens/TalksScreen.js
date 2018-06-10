import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import TalksList from '../components/TalkList';
import { TALKS_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const TalksScreen = () => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={TALKS_QUERY}>
            {({ loading, error, data }) => {
                if (loading) {
                    return <Loading />;
                }
                if (error) {
                    return <ErrorMessage text="Sorry, nothing works:(" />;
                }
                if (!data.allVideoses) {
                    return null;
                }
                return <TalksList talksList={data.allVideoses} />;
            }}
        </Query>
    </ApolloProvider>
);

export default TalksScreen;
