import React from 'react';
import { View } from 'react-native';
import { ApolloProvider, Query } from 'react-apollo';
import { getApolloClient } from '../net/graphqlClient';
import { CATEGORY_QUERY } from '../net/queries';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import TalkList from '../components/TalkList';

const CategoryScreen = (props) => <View />;

export default CategoryScreen;
