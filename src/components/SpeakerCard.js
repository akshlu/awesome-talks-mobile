import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';

const styles = StyleSheet.create({
    speakerCard: {
        flexDirection: 'row',
        height: 100
    },
    speakerPhotoView: {
        width: 100,
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

function getSpeakerPhoto(speaker) {
    return R.pathOr(null, ['photo', 'url'])(speaker);
}

const SpeakerCard = props => {
    const photo = getSpeakerPhoto(props.item);
    return (
        <View style={styles.speakerCard}>
            <View style={styles.speakerPhotoView}>
                {photo && (
                    <Image
                        style={styles.speakerPhoto}
                        source={{ uri: photo }}
                    />
                )}
            </View>
            <View style={styles.speakerName}>
                <Text>{props.item.name}</Text>
            </View>
        </View>
    );
};

SpeakerCard.propTypes = {
    item: PropTypes.object
};

export default SpeakerCard;
