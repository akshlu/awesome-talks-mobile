import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import config from '../config';

const styles = StyleSheet.create({
    talkCard: {
        flexDirection: 'row',
        height: 90
    },
    talkPreview: {
        width: 120,
        height: 90
    },
    talkPreviewView: {
        width: 120,
        height: 90
    },
    talkName: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        flex: 1
    }
});

function getVideoPreview(talk) {
    const link = R.propOr(null, 'link')(talk);
    if (!link) {
        return null;
    }
    return R.replace('{0}', link)(config.youtubeThumbnail);
}

const TalkCard = props => {
    const preview = getVideoPreview(props.item);
    return (
        <View style={styles.talkCard}>
            <View style={styles.talkPreviewView}>
                {preview && (
                    <Image
                        style={styles.talkPreview}
                        source={{ uri: preview }}
                    />
                )}
            </View>
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
