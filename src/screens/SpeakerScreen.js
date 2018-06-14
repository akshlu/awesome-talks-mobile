import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { SPEAKER_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import TalkList from '../components/TalkList';

const styles = StyleSheet.create({
    speakerDetails: {
        flex: 1
    }
});

const SpeakerDetails = (props) => (
    <View style={styles.speakerDetails}>
        <Text>{props.item.bio}</Text>
        <TalkList talksList={props.item.videoses} navigator={props.navigator} />
    </View>
);

SpeakerDetails.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
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
                return (
                    <SpeakerDetails
                        item={data.Speakers}
                        navigator={props.navigator}
                    />
                );
            }}
        </Query>
    </ApolloProvider>
);

SpeakerScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default SpeakerScreen;
