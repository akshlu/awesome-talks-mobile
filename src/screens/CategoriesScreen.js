import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { getApolloClient } from '../net/graphqlClient';
import List from '../components/list/List';
import { CATEGORIES_QUERY, CATEGORIES_QUERY_SEARCH } from '../net/queries';
import nonIdealState from '../hoc/nonIdealState';
import CategoryCard from '../components/CategoryCard';
import { loadMore } from '../services/loadMore';
import { screens } from '../screens';
import { getHashTag } from '../services/text';

export default class CategoriesScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }

    handlePressCategoryCard(item) {
        this.props.navigator.push({
            screen: screens.CATEGORY_SCREEN,
            passProps: { item },
            title: getHashTag(item),
            animationType: 'slide-horizontal'
        });
    }

    renderItem({ item }) {
        return (
            <CategoryCard
                item={item}
                onPress={() => this.handlePressCategoryCard(item)}
            />
        );
    }

    renderContent({ data, networkStatus, refetch, fetchMore }) {
        return (
            <List
                items={data.allTagses}
                loadingMore={networkStatus === NetworkStatus.fetchMore}
                refreshing={networkStatus === NetworkStatus.refetch}
                onPullToRefresh={refetch}
                onEndReachedThreshold={0.5}
                onEndReached={loadMore({
                    fetchMore,
                    connection: data,
                    fieldname: 'allTagses'
                })}
                renderItem={this.renderItem}
            />
        );
    }

    render() {
        const { search } = this.props;
        const query = search ? CATEGORIES_QUERY_SEARCH : CATEGORIES_QUERY;
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query
                    query={query}
                    variables={{ search }}
                    notifyOnNetworkStatusChange
                >
                    {nonIdealState.call(this, this.renderContent.bind(this))}
                </Query>
            </ApolloProvider>
        );
    }
}

CategoriesScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    search: PropTypes.string
};
