import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import {
    View,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    SectionList
} from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import TalkCard from '../components/TalkCard';
import SpeakerCard from '../components/SpeakerCard';
import CategoryCard from '../components/CategoryCard';
import SectionHeader from '../components/SectionHeader';
import { debounce } from '../services/debounce';
import { getApolloClient } from '../net/graphqlClient';
import { SEARCH_QUERY } from '../net/queries';
import { screens } from '../screens';
import EmptySearch from '../components/EmptySearch';
import nonIdealState from '../hoc/nonIdealState';
import Separator from '../components/list/Separator';

class SearchScreen extends React.PureComponent {
    state = { search: '', focused: false };

    static navigatorStyle = {
        navBarHidden: true
    };

    handlePressCard(item, screen) {
        if (!item) {
            return;
        }
        this.props.navigator.push({
            screen,
            navigatorStyle: {
                largeTitle: false
            },
            animationType: 'slide-horizontal',
            passProps: {
                item
            }
        });
    }

    handlePressHeader = (key, title) => {
        const { search } = this.state;
        const screen = (function() {
            if (key === 'talks') return screens.TALKS_SCREEN;
            if (key === 'speakers') return screens.SPEAKERS_SCREEN;
            if (key === 'categories') return screens.CATEGORIES_SCREEN;
        })();
        this.props.navigator.push({
            screen,
            title,
            navigatorStyle: {
                largeTitle: false
            },
            animationType: 'slide-horizontal',
            passProps: {
                search
            }
        });
    };

    handleSearchChange(search) {
        this.setState({ search });
    }

    focus() {
        UIManager.configureNextLayoutAnimation &&
            LayoutAnimation.easeInEaseOut();
        this.setState({ focused: true });
    }

    blur() {
        UIManager.configureNextLayoutAnimation &&
            LayoutAnimation.easeInEaseOut();
        this.setState({ focused: false });
    }

    cancel() {
        this.blur();
    }

    renderTalk = ({ item }) => (
        <TalkCard
            item={item}
            onPress={this.handlePressCard.bind(this, item, screens.TALK_SCREEN)}
        />
    );
    renderSpeaker = ({ item }) => (
        <SpeakerCard
            item={item}
            onPress={this.handlePressCard.bind(
                this,
                item,
                screens.SPEAKER_SCREEN
            )}
        />
    );
    renderCategory = ({ item }) => (
        <CategoryCard
            item={item}
            onPress={this.handlePressCard.bind(
                this,
                item,
                screens.CATEGORY_SCREEN
            )}
        />
    );
    renderSectionHeader = ({ section: { title, data, key } }) =>
        data &&
        data.length > 0 && (
            <SectionHeader
                title={title}
                onPress={() => this.handlePressHeader(key, title)}
            />
        );

    renderResult = ({ data }) => {
        return (
            <SectionList
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"
                ItemSeparatorComponent={Separator}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={(item) => item.id}
                sections={[
                    {
                        title: 'Talks',
                        key: 'talks',
                        data: data.allVideoses,
                        renderItem: this.renderTalk
                    },
                    {
                        title: 'Speakers',
                        key: 'speakers',
                        data: data.allSpeakerses,
                        renderItem: this.renderSpeaker
                    },
                    {
                        title: 'Categories',
                        key: 'categories',
                        data: data.allTagses,
                        renderItem: this.renderCategory
                    }
                ]}
            />
        );
    };

    renderContent = () => {
        const { state } = this;
        const { search } = state;
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query query={SEARCH_QUERY} variables={{ search }}>
                    {nonIdealState.call(this, this.renderResult)}
                </Query>
            </ApolloProvider>
        );
    };

    render() {
        const { state } = this;
        const { search } = state;
        return (
            <View style={styles.container}>
                <SearchBar
                    onClear={this.handleSearchChange.bind(this, '')}
                    onChangeText={debounce(
                        this.handleSearchChange.bind(this),
                        300
                    )}
                    onCancel={this.cancel.bind(this)}
                    onFocus={this.focus.bind(this)}
                    onBlur={this.blur.bind(this)}
                    value={search}
                />
                {this.state.search.length === 0 ? (
                    <EmptySearch />
                ) : (
                    this.renderContent()
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

SearchScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default SearchScreen;
