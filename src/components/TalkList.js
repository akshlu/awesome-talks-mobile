import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import TalkCard from './TalkCard';
import { screens } from '../screens';
import Footer from './list/Footer';
import Separator from './list/Separator';
import { loadMore } from '../services/loadMore';

export default class TalksList extends React.PureComponent {
    handlePressTalkCard = (item) => {
        if (!item) {
            return;
        }
        this.props.navigator.push({
            screen: screens.TALK_SCREEN,
            navigatorStyle: {
                largeTitle: false
            },
            passProps: {
                item
            }
        });
    };

    keyExtractor(item) {
        return item.id;
    }

    renderItem = ({ item }) => {
        return <TalkCard item={item} onPress={this.handlePressTalkCard} />;
    };

    render() {
        const { props, keyExtractor, renderItem } = this;
        const {
            talksList,
            onEndReached,
            onPullToRefresh,
            refreshing,
            loadingMore
        } = props;
        return (
            <FlatList
                refreshing={refreshing}
                onRefresh={onPullToRefresh}
                ItemSeparatorComponent={Separator}
                ListFooterComponent={<Footer showed={loadingMore} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0}
                data={talksList}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        );
    }
}

TalksList.propTypes = {
    talksList: PropTypes.array,
    navigator: PropTypes.object.isRequired,
    onEndReached: PropTypes.func,
    onPullToRefresh: PropTypes.func,
    refreshing: PropTypes.bool,
    loadingMore: PropTypes.bool
};
