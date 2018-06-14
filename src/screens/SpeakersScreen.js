import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';
import { SPEAKERS_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const SpeakersScreen = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={SPEAKERS_QUERY}>
            {({ loading, error, data }) => {
                if (loading) {
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
