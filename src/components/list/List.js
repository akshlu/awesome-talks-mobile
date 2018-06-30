import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Separator from './Separator';

export default class List extends Component {
    keyExtractor(item) {
        return item.id;
    }

    render() {
        return (
            <FlatList
                ItemSeparatorComponent={Separator}
                renderItem={this.props.renderItem}
                data={this.props.items}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

List.propTypes = {
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
