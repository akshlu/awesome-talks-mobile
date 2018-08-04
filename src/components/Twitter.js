import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Linking } from 'react-native';
import PlainText from './text/PlainText';
import { getCurrentTheme } from '../style';

const { colors, icons } = getCurrentTheme();

const TwitterTouchable = styled.TouchableOpacity({
    flexDirection: 'row'
});

const TwitterNameText = styled(PlainText)({
    color: colors.primary,
    paddingTop: 2
});

const TwitterIcon = styled.Image({
    width: 28,
    height: 28,
    marginRight: 0
});

const twitterAppUrl = 'twitter://user?screen_name=';
const twitterWeburl = 'https://twitter.com/';

function handleTwitterLink(name) {
    Linking.canOpenURL(twitterAppUrl + name).then((supported) => {
        if (!supported) {
            Linking.openURL(twitterWeburl + name);
            return;
        }
        Linking.openURL(twitterAppUrl + name);
    });
}

const Twitter = (props) => {
    const { name } = props;
    return (
        <TwitterTouchable onPress={() => handleTwitterLink(name)}>
            <TwitterIcon source={icons.twitterIcon} />
            <TwitterNameText>{`@${name}`}</TwitterNameText>
        </TwitterTouchable>
    );
};

Twitter.propTypes = {
    name: PropTypes.string.isRequired
};

export default Twitter;
