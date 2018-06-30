import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import List from '../components/list/List';
import { CATEGORIES_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import CategoryCard from '../components/CategoryCard';

const CategoriesScreen = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={CATEGORIES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) {
                    return <Loading />;
                }
                if (error) {
                    return <ErrorMessage text="Sorry, nothing works:(" />;
                }
                if (!data.allTagses) {
                    return null;
                }
                return (
                    <List
                        items={data.allTagses}
                        renderItem={({ item }) => <CategoryCard item={item} />}
                    />
                );
            }}
        </Query>
    </ApolloProvider>
);

export default CategoriesScreen;
