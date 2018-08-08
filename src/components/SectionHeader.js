import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { getCurrentTheme } from '../style';
import H2 from './text/H2';
import SmallText from './text/SmallText';

const theme = getCurrentTheme();

class SectionHeader extends PureComponent {
    static defaultProps = {
        onPress: () => {}
    };

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <H2>{this.props.title}</H2>
                    <SmallText>Show All</SmallText>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: theme.colors.primary
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default SectionHeader;
