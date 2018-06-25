import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import config from '../config';
import { getDurationString } from '../services/calendar';
import { getCurrentTheme } from '../style';

const { colors, fonts } = getCurrentTheme();

const styles = StyleSheet.create({
    talkCard: {
        flexDirection: 'row',
        height: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    talkPreview: {
        width: 92,
        height: 60
    },
    talkPreviewView: {
        width: 92,
        height: 64,
        marginRight: 12,
        borderRadius: 4,
        backgroundColor: colors.dark,
        justifyContent: 'center'
    },
    talkNameView: {
        alignItems: 'flex-start',
        paddingLeft: 10,
        flex: 1
    },
    talkNameText: {
        ...fonts.h2
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

class TalkCard extends PureComponent {
    handlePress = () => {
        const { onPress, item } = this.props;
        if (!onPress) {
            return;
        }
        onPress(item);
    };

    render() {
        const { item } = this.props;
        const preview = getVideoPreview(item);
        return (
            <TouchableOpacity onPress={this.handlePress}>
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
                        <Text style={styles.talkDuration}>
                            {getDurationString(item.duration)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

TalkCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func
};

export default TalkCard;
