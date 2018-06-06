import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    talkCard: {
        flexDirection: 'row',
        height: 100
    },
    talkPreviewView: {
        width: 100,
        height: 100
    },
    talkName: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        flex: 1
    }
});

const TalkCard = props => {
    return (
        <View style={styles.talkCard}>
            <View style={styles.talkPreviewView} />
            <View style={styles.talkName}>
                <Text>{props.item.name}</Text>
            </View>
        </View>
    );
};

TalkCard.propTypes = {
    item: PropTypes.object
};

export default TalkCard;
