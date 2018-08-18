import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SpeakerCard from './SpeakerCard';
import { screens } from '../screens';
import Separator from './list/Separator';
import Footer from './list/Footer';

export default class SpeakerList extends Component {
    handlePressSpeakerCard = (item) => {
        if (!item) {
            return;
        }
        this.props.navigator.push({
            screen: screens.SPEAKER_SCREEN,
            passProps: { item },
            animationType: 'slide-horizontal'
        });
    };

    keyExtractor(item) {
        return item.id;
    }

    renderItem = ({ item }) => {
        return (
            <SpeakerCard item={item} onPress={this.handlePressSpeakerCard} />
        );
    };

    render() {
        const { props, keyExtractor, renderItem } = this;
        const {
            speakersList,
            onEndReached,
            onPullToRefresh,
            refreshing,
            loadingMore
        } = props;
        return (
            <FlatList
                refreshing={refreshing}
                onRefresh={onPullToRefresh}
                ListFooterComponent={<Footer showed={loadingMore} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0}
                ItemSeparatorComponent={Separator}
                data={speakersList}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        );
    }
}

SpeakerList.propTypes = {
    speakersList: PropTypes.array,
    navigator: PropTypes.object.isRequired,
    refreshing: PropTypes.bool.isRequired,
    onPullToRefresh: PropTypes.func.isRequired,
    onEndReached: PropTypes.func.isRequired,
    loadingMore: PropTypes.bool
};
