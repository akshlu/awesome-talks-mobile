import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';
import { SPEAKERS_QUERY } from '../net/queries';
import Loading from '../components/Loading';

const SpeakersScreen = () => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={SPEAKERS_QUERY}>
            {({ loading, error, data }) => {
                if (loading) {
                    return <Loading />;
                }
                if (!data.allSpeakerses) {
                    return null;
                }
                return <SpeakerList speakersList={data.allSpeakerses} />;
            }}
        </Query>
    </ApolloProvider>
);

export default SpeakersScreen;
