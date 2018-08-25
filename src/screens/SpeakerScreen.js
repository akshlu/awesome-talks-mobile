import React from 'react';
import { Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { NetworkStatus } from 'apollo-client';
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
    marginTop: 16,
    marginBottom: 24
});

const TalksListHeader = styled.View({
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9
});

const SpeakerDetails = (props) => {
    const { networkStatus, item, navigator } = props;
    const speakerPicture = getSpeakerPhotoUrl(item);
    const talksCount = item._videosesMeta.count;

    return (
        <SpeakerView>
            {speakerPicture && (
                <Image
                    source={{ uri: speakerPicture }}
                    style={{ height: Dimensions.get('window').height / 3 }}
                />
            )}
            <SpeakerViewContent>
                <SpeakerNameHeader>{item.name}</SpeakerNameHeader>
                {R.not(R.isEmpty(item.twitter) || R.isNil(item.twitter)) && (
                    <Twitter name={item.twitter} />
                )}
                <Bio>{item.bio}</Bio>
            </SpeakerViewContent>

            {talksCount > 0 && (
                <TalksListHeader>
                    <H2>Talks</H2>
                    <SmallText>{talksCount}</SmallText>
                </TalksListHeader>
            )}

            <Separator />
            <TalkList
                talksList={item.videoses}
                navigator={navigator}
                refreshing={networkStatus === NetworkStatus.refetch}
                loadingMore={networkStatus === NetworkStatus.fetchMore}
            />
        </SpeakerView>
    );
};

SpeakerDetails.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
    networkStatus: PropTypes.string.isRequired
};

class SpeakerScreen extends React.PureComponent {
    renderContent({ data, networkStatus, fetchMore, refetch, loading }) {
        const { props } = this;
        return (
            <SpeakerDetails
                item={data.Speakers}
                networkStatus={networkStatus}
                navigator={props.navigator}
            />
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
