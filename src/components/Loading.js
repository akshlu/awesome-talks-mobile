import React from 'react';
import PropTypes from 'prop-types';
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

const Loading = (props) => (
    <View style={[styles.loadingScreen, props.style]}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>Loading</Text>
    </View>
);

Loading.propTypes = {
    style: PropTypes.any
};

export default Loading;
