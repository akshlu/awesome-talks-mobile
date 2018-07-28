import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { CATEGORY_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import TalkList from '../components/TalkList';

const CategoryScreen = (props) => (
    <ApolloProvider client={getApolloClient()}>
        <Query query={CATEGORY_QUERY} variables={{ id: props.item.id }}>
            {({ loading, error, data }) => {
                if (loading) {
                    return <Loading />;
                }
                if (error) {
                    return <ErrorMessage text="Sorry, nothing works:(" />;
                }
                if (!data.Tags) {
                    return null;
                }
                return (
                    <TalkList
                        talksList={data.Tags.videos}
                        navigator={props.navigator}
                    />
                );
            }}
        </Query>
    </ApolloProvider>
);

CategoryScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default CategoryScreen;
