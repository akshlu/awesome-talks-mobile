import React from 'react';
import PropTypes from 'prop-types';
import YouTubePlayer from 'react-native-youtube';
import styled from 'styled-components';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { screens } from '../screens';
import { TALK_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/text/Header';
import PlainText from '../components/text/PlainText';
import ClickableTag from '../components/ClickableTag';
import { getHashTag } from '../services/text';

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

function handleTagClick(item, navigator) {
    navigator.push({
        screen: screens.CATEGORY_SCREEN,
        passProps: {
            item
        },
        title: getHashTag(item)
    });
}

const TalkScreen = (props) => {
    const { navigator } = props;
    return (
        <ApolloProvider client={getApolloClient()}>
            <TalkView>
                <VideoPlayer videoId={props.item.link} />
                <TalkViewContent>
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
                    <Query query={TALK_QUERY} variables={{ id: props.item.id }}>
                        {({ loading, error, data }) => {
                            if (loading) {
                                return <Loading style={{ height: 200 }} />;
                            }
                            if (error) {
                                return (
                                    <ErrorMessage text="Sorry, nothing works:(" />
                                );
                            }
                            if (!data.Videos) {
                                return null;
                            }
                            return (
                                <Description>
                                    {data.Videos.description}
                                </Description>
                            );
                        }}
                    </Query>
                </TalkViewContent>
            </TalkView>
        </ApolloProvider>
    );
};

TalkScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default TalkScreen;
