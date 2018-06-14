import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import YouTubePlayer from 'react-native-youtube';

const styles = StyleSheet.create({
    talkScreen: {
        flex: 1,
        flexDirection: 'column'
    },
    video: {
        alignSelf: 'stretch',
        height: 200
    },
    talkTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

const TalkScreen = (props) => (
    <View style={styles.talkScreen}>
        <YouTubePlayer videoId={props.item.link} style={styles.video} />
        <Text style={styles.talkTitle}>{props.item.name}</Text>
    </View>
);

TalkScreen.propTypes = {
    item: PropTypes.object.isRequired
};

export default TalkScreen;
