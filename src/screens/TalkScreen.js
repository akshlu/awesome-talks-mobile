import React from 'react';
import PropTypes from 'prop-types';
import YouTubePlayer from 'react-native-youtube';
import styled from 'styled-components';
import Header from '../components/text/Header';
import PlainText from '../components/text/PlainText';
import Tag from '../components/text/Tag';
import { getTagsString } from '../services/text';

const TalkView = styled.ScrollView({
    flex: 1,
    flexDirection: 'column'
});

const TalkViewContent = styled.View({
    paddingLeft: 28,
    paddingRight: 20
});

const VideoPlayer = styled(YouTubePlayer)({
    alignSelf: 'stretch',
    height: 200,
    marginBottom: 36
});

const TagWithMargin = styled(Tag)({
    marginTop: 8
});

const Description = styled(PlainText)({
    marginTop: 24,
    marginBottom: 24
});

const TalkScreen = (props) => {
    return (
        <TalkView>
            <VideoPlayer videoId={props.item.link} />
            <TalkViewContent>
                <Header>{props.item.name.trim()}</Header>
                <TagWithMargin>{getTagsString(props.item.tags)}</TagWithMargin>
                <Description>{props.item.description}</Description>
            </TalkViewContent>
        </TalkView>
    );
};

TalkScreen.propTypes = {
    item: PropTypes.object.isRequired
};

export default TalkScreen;
