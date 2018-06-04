import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        marginTop: 10,
        color: 'gray',
        fontSize: 11
    }
});

const Loading = props => (
    <View style={styles.loadingScreen}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>Loading</Text>
    </View>
);

export default Loading;
