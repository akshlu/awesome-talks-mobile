import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    speakerCard: {
        flexDirection: 'row',
        height: 100
    },
    speakerPhoto: {
        width: 100,
        height: 100
    },
    speakerName: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        flex: 1
    }
});

const SpeakerCard = props => (
    <View style={styles.speakerCard}>
        <Image
            style={styles.speakerPhoto}
            source={{ uri: props.item.photo.url }}
        />
        <View style={styles.speakerName}>
            <Text>{props.item.name}</Text>
        </View>
    </View>
);

SpeakerCard.propTypes = {
    item: PropTypes.object
};

export default SpeakerCard;
