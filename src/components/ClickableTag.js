import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Tag from './text/Tag';

const ClickableTag = (props) => (
    <TouchableOpacity onPRess={props.onPress}>
        <Tag {...props} />
    </TouchableOpacity>
);

ClickableTag.propTypes = {
    onPress: PropTypes.func
};

export default ClickableTag;
