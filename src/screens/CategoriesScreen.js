import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import List from '../components/list/List';
import { CATEGORIES_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import CategoryCard from '../components/CategoryCard';
import { screens } from '../screens';
import { getHashTag } from '../services/text';

export default class CategoriesScreen extends React.Component {
    handlePressCategoryCard(item) {
        this.props.navigator.push({
            screen: screens.CATEGORY_SCREEN,
            passProps: { item },
            title: getHashTag(item)
        });
    }

    render() {
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query query={CATEGORIES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
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
                                renderItem={({ item }) => (
                                    <CategoryCard
                                        item={item}
                                        onPress={() =>
                                            this.handlePressCategoryCard(item)
                                        }
                                    />
                                )}
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
