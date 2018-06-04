import ApolloClient from 'apollo-boost';
import config from '../config';

const client = new ApolloClient({ uri: config.serverUrl });

export function getApolloClient() {
    return client;
}
