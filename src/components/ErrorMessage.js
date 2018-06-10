import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const ErrorMessage = props => (
    <View style={styles.errorView}>
        <Text>{props.text}</Text>
    </View>
);

ErrorMessage.propTypes = {
    text: PropTypes.string
};

export default ErrorMessage;
