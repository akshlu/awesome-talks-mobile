import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';
import { SPEAKERS_QUERY } from '../net/queries';

const SpeakersScreen = () => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={SPEAKERS_QUERY}>
            {({ loading, error, data }) => {
                if (!data.allSpeakerses) {
                    return null;
                }
                return <SpeakerList speakersList={data.allSpeakerses} />;
            }}
        </Query>
    </ApolloProvider>
);

export default SpeakersScreen;
