import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
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

class SpeakerCard extends PureComponent {
    handlePress = () => {
        const { onPress, item } = this.props;
        if (!onPress) {
            return;
        }
        onPress(item);
    };

    render() {
        const { item } = this.props;
        const photo = getSpeakerPhoto(item);
        return (
            <TouchableOpacity onPress={this.handlePress}>
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
                        <Text>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

SpeakerCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func
};

export default SpeakerCard;
