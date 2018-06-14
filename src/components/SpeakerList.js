import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SpeakerCard from './SpeakerCard';
import { screens } from '../screens';

export default class SpeakerList extends Component {
    handlePressSpeakerCard = (item) => {
        if (!item) {
            return;
        }
        this.props.navigator.push({
            screen: screens.SPEAKER_SCREEN,
            title: item.name
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
    speakersList: PropTypes.array,
    navigator: PropTypes.object.isRequired
};
