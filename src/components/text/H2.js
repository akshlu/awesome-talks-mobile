import React from 'react';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts } = getCurrentTheme();

const StyledText = styled.Text({
    ...fonts.h2
});

const H2 = (props) => <StyledText>{props.children}</StyledText>;

export default H2;
