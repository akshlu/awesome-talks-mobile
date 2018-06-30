import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SpeakerCard from './SpeakerCard';
import { screens } from '../screens';
import Separator from './list/Separator';

export default class SpeakerList extends Component {
    handlePressSpeakerCard = (item) => {
        if (!item) {
            return;
        }
        this.props.navigator.push({
            screen: screens.SPEAKER_SCREEN,
            title: item.name,
            passProps: { item }
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
                ItemSeparatorComponent={Separator}
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
