import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Separator from './Separator';
import Footer from './Footer';

export default class List extends Component {
    keyExtractor(item) {
        return item.id;
    }

    render() {
        const { props, keyExtractor } = this;
        const {
            items,
            onEndReached,
            onPullToRefresh,
            refreshing,
            renderItem,
            loadingMore
        } = props;
        return (
            <FlatList
                ItemSeparatorComponent={Separator}
                renderItem={renderItem}
                refreshing={refreshing}
                onRefresh={onPullToRefresh}
                data={items}
                keyExtractor={keyExtractor}
                onEndReached={onEndReached}
                onEndReachedThreshold={0}
                ListFooterComponent={<Footer showed={loadingMore} />}
            />
        );
    }
}

List.propTypes = {
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    refreshing: PropTypes.bool.isRequired,
    onPullToRefresh: PropTypes.func.isRequired,
    onEndReached: PropTypes.func.isRequired,
    loadingMore: PropTypes.bool
};
