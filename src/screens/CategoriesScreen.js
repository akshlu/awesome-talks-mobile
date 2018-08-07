import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { NetworkStatus } from 'apollo-client';
import { getApolloClient } from '../net/graphqlClient';
import List from '../components/list/List';
import { CATEGORIES_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
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
            title: getHashTag(item)
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

    render() {
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query query={CATEGORIES_QUERY} notifyOnNetworkStatusChange>
                    {({
                        loading,
                        error,
                        data,
                        fetchMore,
                        refetch,
                        networkStatus
                    }) => {
                        if (
                            loading &&
                            networkStatus !== NetworkStatus.fetchMore &&
                            networkStatus !== NetworkStatus.refetch
                        ) {
                            return <Loading />;
                        }
                        if (error) {
                            return (
                                <ErrorMessage text="Sorry, nothing works:(" />
                            );
                        }
                        if (!data.allTagses) {
                            return null;
                        }
                        return (
                            <List
                                items={data.allTagses}
                                loadingMore={
                                    networkStatus === NetworkStatus.fetchMore
                                }
                                refreshing={loading}
                                onPullToRefresh={refetch}
                                onEndReached={loadMore({
                                    fetchMore,
                                    connection: data,
                                    fieldname: 'allTagses'
                                })}
                                renderItem={this.renderItem}
                            />
                        );
                    }}
                </Query>
            </ApolloProvider>
        );
    }
}

CategoriesScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};
