import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import H2 from './text/H2';
import SmallText from './text/SmallText';
import { getCurrentTheme } from '../style';

const theme = getCurrentTheme();

class ServerError extends React.PureComponent {
    render() {
        const { refetch } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    source={theme.icons.serverError}
                    width={100}
                    height={100}
                />
                <H2>Something Went Wrong</H2>
                <SmallText style={styles.txt}>
                    Not to worry - just try again later
                </SmallText>
                <TouchableOpacity onPress={refetch}>
                    <View style={styles.btn}>
                        <SmallText style={{ color: theme.colors.primary }}>
                            Try again
                        </SmallText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

ServerError.propTypes = {
    refetch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        marginVertical: 10,
        fontWeight: '400'
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 15,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: theme.colors.primary
    }
});

export default ServerError;
