import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts, colors } = getCurrentTheme();

const StyledView = styled.View`
    background-color: ${colors.greyTransparent08};
    border-radius: 4px;
    padding: 1px 4px 1px 4px;
    position: absolute;
    right: 4px;
    bottom: 4px;
`;

const StyledText = styled.Text({
    ...fonts.xSmall
});

const Duration = (props) => (
    <StyledView {...props}>
        <StyledText>{props.children}</StyledText>
    </StyledView>
);

Duration.propTypes = {
    children: PropTypes.string
};

export default Duration;
