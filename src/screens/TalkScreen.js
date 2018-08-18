import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Platform } from 'react-native';
import YouTubePlayer from 'react-native-youtube';
import styled from 'styled-components';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { screens } from '../screens';
import { TALK_QUERY } from '../net/queries';
import Header from '../components/text/Header';
import PlainText from '../components/text/PlainText';
import ClickableTag from '../components/ClickableTag';
import Avatar from '../components/Avatar';
import { getHashTag, getSpeakerPhotoUrl } from '../services/text';
import { getCurrentTheme } from '../style';
import nonIdealState from '../hoc/nonIdealState';

const { colors } = getCurrentTheme();

const TalkView = styled.ScrollView({
    flex: 1,
    flexDirection: 'column'
});

const TalkViewContent = styled.View({
    paddingLeft: 28,
    paddingRight: 20
});

const VideoPlayer = styled(YouTubePlayer)`
    align-self: stretch;
    height: ${(props) => props.height};
    margin-bottom: 36;
`;

const TagView = styled.View({
    marginTop: 8,
    flexDirection: 'row'
});

const Tag = styled(ClickableTag)({
    marginRight: 2
});

const Description = styled(PlainText)({
    marginTop: 24,
    marginBottom: 24
});

const SpeakerTouchable = styled.TouchableOpacity({
    flexDirection: 'row',
    marginBottom: 16
});

const SpeakerNameText = styled(PlainText)({
    color: colors.primary,
    marginLeft: 12
});

const Speaker = (props) => {
    const { item } = props;
    const photo = getSpeakerPhotoUrl(item);
    return (
        <SpeakerTouchable onPress={props.onPress}>
            <Avatar picture={photo} size={28} />
            <SpeakerNameText>{item.name}</SpeakerNameText>
        </SpeakerTouchable>
    );
};

Speaker.propTypes = {
    item: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};

function handleTagClick(item, navigator) {
    navigator.push({
        screen: screens.CATEGORY_SCREEN,
        passProps: {
            item
        },
        animationType: 'slide-horizontal',
        title: getHashTag(item)
    });
}

function handleSpeakerClick(item, navigator) {
    navigator.push({
        screen: screens.SPEAKER_SCREEN,
        passProps: {
            item
        },
        animationType: 'slide-horizontal'
    });
}

class TalkScreen extends React.PureComponent {
    renderContent({ data, networkStatus, fetchMore, refetch, loading }) {
        const { props } = this;
        const { navigator } = props;
        return (
            <TalkView>
                {Platform.os === 'android' ? (
                    <VideoPlayer
                        videoId={props.item.link}
                        height={Dimensions.get('window').height / 3}
                    />
                ) : null}
                <TalkViewContent>
                    {data.Videos.speaker.map((speaker) => (
                        <Speaker
                            key={speaker.id}
                            item={speaker}
                            onPress={() =>
                                handleSpeakerClick(speaker, navigator)
                            }
                        />
                    ))}

                    <Header>{props.item.name.trim()}</Header>
                    <TagView>
                        {props.item.tags.map((tag) => (
                            <Tag
                                key={tag.id}
                                onPress={() => handleTagClick(tag, navigator)}
                            >
                                {getHashTag(tag)}
                            </Tag>
                        ))}
                    </TagView>
                    <Description>{data.Videos.description}</Description>
                </TalkViewContent>
            </TalkView>
        );
    }

    render() {
        const { props } = this;

        return (
            <ApolloProvider client={getApolloClient()}>
                <Query query={TALK_QUERY} variables={{ id: props.item.id }}>
                    {nonIdealState.call(this, this.renderContent.bind(this))}
                </Query>
            </ApolloProvider>
        );
    }
}

TalkScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default TalkScreen;
