import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const { size, picture } = props;
    return (
        <Image
            style={{ width: size, height: size, borderRadius: size / 2 }}
            source={{ uri: picture }}
        />
    );
};

Avatar.propTypes = {
    picture: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};

export default Avatar;
