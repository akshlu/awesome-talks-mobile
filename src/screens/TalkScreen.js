import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    talkScreen: {
        flex: 1,
        flexDirection: 'column'
    },
    video: {
        height: 200,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoWarning: {
        color: 'white'
    },
    talkTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

const TalkScreen = (props) => (
    <View style={styles.talkScreen}>
        <View style={styles.video}>
            <Text style={styles.videoWarning}>Awesome Black Rectangle</Text>
        </View>
        <Text style={styles.talkTitle}>{props.item.name}</Text>
    </View>
);

TalkScreen.propTypes = {
    item: PropTypes.object.isRequired
};

export default TalkScreen;
