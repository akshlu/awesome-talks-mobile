import ApolloClient from 'apollo-boost';
import config from '../config';
import { NetInfo } from 'react-native';

const typeDefs = `
    type Query {
        isConnected: Boolean!
    }
`;

const resolvers = {
    Query: {
        isConnected(_, variables, { cache, getCacheKey }) {
            return NetInfo.isConnected.fetch();
        }
    }
};

const client = new ApolloClient({
    uri: config.serverUrl,
    clientState: {
        resolvers,
        typeDefs
    }
});

export function getApolloClient() {
    return client;
}
