import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import TalkCard from './TalkCard';
import { screens } from '../screens';
import Separator from './list/Separator';

export default class TalksList extends Component {
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
        return (
            <FlatList
                ItemSeparatorComponent={Separator}
                data={this.props.talksList}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

TalksList.propTypes = {
    talksList: PropTypes.array,
    navigator: PropTypes.object.isRequired
};
