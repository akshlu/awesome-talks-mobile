import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import H2 from './text/H2';
import Avatar from './Avatar';

const styles = StyleSheet.create({
    speakerCard: {
        flexDirection: 'row',
        height: 72
    },
    speakerPhotoView: {
        width: 76,
        alignItems: 'center',
        justifyContent: 'center'
    },
    speakerName: {
        alignItems: 'flex-start',
        justifyContent: 'center',
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
                        {photo && <Avatar size={48} picture={photo} />}
                    </View>
                    <View style={styles.speakerName}>
                        <H2>{item.name}</H2>
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
