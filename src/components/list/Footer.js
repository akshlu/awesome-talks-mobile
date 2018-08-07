import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

export default class Footer extends PureComponent {
    render() {
        return (
            <ActivityIndicator
                animating={this.props.showed}
                style={{ height: 50 }}
            />
        );
    }
}

Footer.propTypes = {
    showed: PropTypes.bool
};
