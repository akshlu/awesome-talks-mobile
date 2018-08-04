import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { SPEAKER_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import TalkList from '../components/TalkList';
import styled from 'styled-components';
import PlainText from '../components/text/PlainText';
import Header from '../components/text/Header';
import H2 from '../components/text/H2';
import SmallText from '../components/text/SmallText';
import Separator from '../components/list/Separator';
import { getSpeakerPhotoUrl } from '../services/text';

const SpeakerView = styled.ScrollView({
    flex: 1,
    flexDirection: 'column'
});

const SpeakerViewContent = styled.View({
    paddingLeft: 28,
    paddingRight: 20
});

const SpeakerNameHeader = styled(Header)({
    paddingTop: 36,
    paddingBottom: 8
});

const Bio = styled(PlainText)({
    marginTop: 24,
    marginBottom: 24
});

const SpeakerPicture = styled.Image({
    height: 200
});

const TalksListHeader = styled.View({
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9
});

const SpeakerDetails = (props) => {
    const speakerPicture = getSpeakerPhotoUrl(props.item);
    const talksCount = props.item._videosesMeta.count;

    return (
        <SpeakerView>
            {speakerPicture && (
                <SpeakerPicture source={{ uri: speakerPicture }} />
            )}
            <SpeakerViewContent>
                <SpeakerNameHeader>{props.item.name}</SpeakerNameHeader>
                <Bio>{props.item.bio}</Bio>
            </SpeakerViewContent>

            {talksCount > 0 && (
                <TalksListHeader>
                    <H2>Talks</H2>
                    <SmallText>{talksCount}</SmallText>
                </TalksListHeader>
            )}

            <Separator />
            <TalkList
                talksList={props.item.videoses}
                navigator={props.navigator}
            />
        </SpeakerView>
    );
};

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
