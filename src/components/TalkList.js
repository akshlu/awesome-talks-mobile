import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import TalkCard from './TalkCard';

export default class TalksList extends Component {
    keyExtractor(item) {
        return item.id;
    }

    renderItem({ item }) {
        return <TalkCard item={item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.talksList}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

TalksList.propTypes = {
    talksList: PropTypes.array
};
