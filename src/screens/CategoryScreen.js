import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { CATEGORY_QUERY } from '../net/queries';
import nonIdealState from '../hoc/nonIdealState';
import TalkList from '../components/TalkList';

class CategoryScreen extends React.PureComponent {
    renderContet({ data }) {
        const { props } = this;
        return (
            <TalkList
                talksList={data.Tags.videos}
                navigator={props.navigator}
            />
        );
    }

    render() {
        const { props } = this;
        return (
            <ApolloProvider client={getApolloClient()}>
                <Query query={CATEGORY_QUERY} variables={{ id: props.item.id }}>
                    {nonIdealState.call(this, this.renderContet.bind(this))}
                </Query>
            </ApolloProvider>
        );
    }
}

CategoryScreen.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

export default CategoryScreen;
