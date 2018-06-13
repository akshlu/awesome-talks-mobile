import React, { PureComponent } from 'react';
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
    talkNameView: {
        alignItems: 'flex-start',
        paddingLeft: 10,
        flex: 1
    },
    talkNameText: {},
    talkSpeakersText: {
        fontSize: 12,
        color: 'gray'
    },
    talkDuration: {
        fontSize: 10,
        color: 'gray'
    }
});

function getVideoPreview(talk) {
    const link = R.propOr(null, 'link')(talk);
    if (!link) {
        return null;
    }
    return R.replace('{0}', link)(config.youtubeThumbnail);
}

function getSpeakers(talk) {
    const listOfNames = R.pluck('name', talk.speaker);
    return R.join(',', listOfNames);
}

function getDuration(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const durationSeconds = seconds % 60;
    const minutes = (seconds - durationSeconds) / 60;
    if (seconds < 3600) {
        return `${minutes}m`;
    }
    const minutesWithoutHours = minutes % 60;
    const hours = (minutes - minutesWithoutHours) / 60;
    return `${hours}h ${minutesWithoutHours}m`;
}

class TalkCard extends PureComponent {
    render() {
        const { item } = this.props;
        const preview = getVideoPreview(item);
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
                <View style={styles.talkNameView}>
                    <Text style={styles.talkNameText}>{item.name}</Text>
                    <Text style={styles.talkSpeakersText}>
                        {getSpeakers(item)}
                    </Text>
                    <Text style={styles.talkDuration}>
                        {getDuration(item.duration)}
                    </Text>
                </View>
            </View>
        );
    }
}

TalkCard.propTypes = {
    item: PropTypes.object
};

export default TalkCard;
