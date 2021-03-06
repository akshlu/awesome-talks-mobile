import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import config from '../config';
import { getCurrentTheme } from '../style';
import { getTagsString } from '../services/text';
import { getDurationString } from '../services/calendar';
import H2 from './text/H2';
import Tag from './text/Tag';
import Duration from './text/Duration';

const { colors } = getCurrentTheme();

const styles = StyleSheet.create({
    talkCard: {
        flexDirection: 'row',
        alignItems: 'center',
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
        flex: 1
    },
    tag: {
        marginTop: 4
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
                        <Duration
                            style={{
                                position: 'absolute',
                                right: 4,
                                bottom: 4
                            }}
                        >
                            {getDurationString(item.duration)}
                        </Duration>
                    </View>
                    <View style={styles.talkNameView}>
                        <H2 numberOfLines={2} elipzizMode="tail">
                            {item.name.trim()}
                        </H2>
                        <Tag
                            style={styles.tag}
                            numberOfLines={1}
                            elipzizMode="tail"
                        >
                            {getTagsString(item.tags)}
                        </Tag>
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
