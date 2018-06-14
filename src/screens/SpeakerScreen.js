import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { SPEAKER_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const SpeakerDetails = (props) => (
    <View>
        <Text>{props.item.bio}</Text>
    </View>
);

SpeakerDetails.propTypes = {
    item: PropTypes.object.isRequired
};

const SpeakerScreen = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={SPEAKER_QUERY} variables={{ id: props.item.id }}>
            {({ loading, error, data }) => {
                if (loading) {
                    return <Loading />;
                }
                if (error) {
                    return <ErrorMessage text="Sorry, nothing works:(" />;
                }
                if (!data.Speakers) {
                    return null;
                }
                return <SpeakerDetails item={data.Speakers} />;
            }}
        </Query>
    </ApolloProvider>
);

SpeakerScreen.propTypes = {
    item: PropTypes.object.isRequired
};

export default SpeakerScreen;
