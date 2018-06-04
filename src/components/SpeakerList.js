import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SpeakerCard from './SpeakerCard';

export default class SpeakerList extends Component {
    keyExtractor(item) {
        return item.id;
    }

    renderItem({ item }) {
        return <SpeakerCard item={item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.speakersList}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

SpeakerList.propTypes = {
    speakersList: PropTypes.array
};
