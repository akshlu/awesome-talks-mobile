import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { SPEAKER_QUERY } from '../net/queries';
import TalkList from '../components/TalkList';
import styled from 'styled-components';
import PlainText from '../components/text/PlainText';
import Header from '../components/text/Header';
import H2 from '../components/text/H2';
import SmallText from '../components/text/SmallText';
import Separator from '../components/list/Separator';
import { getSpeakerPhotoUrl } from '../services/text';
import Twitter from '../components/Twitter';
import nonIdealState from '../hoc/nonIdealState';

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
    paddingBottom: 12
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
                {props.item.twitter && <Twitter name={props.item.twitter} />}
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

class SpeakerScreen extends React.PureComponent {
    renderContent({ data, networkStatus, fetchMore, refetch, loading }) {
        const { props } = this;
        return (
            <SpeakerDetails item={data.Speakers} navigator={props.navigator} />
        );
    }

    render() {
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query
                    query={SPEAKER_QUERY}
                    variables={{ id: this.props.item.id }}
                >
                    {nonIdealState.call(this, this.renderContent.bind(this))}
                </Query>
            </ApolloProvider>
        );
    }
}

SpeakerScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default SpeakerScreen;
