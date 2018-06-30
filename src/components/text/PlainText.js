import React from 'react';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts } = getCurrentTheme();

const StyledText = styled.Text({
    ...fonts.plain
});

const PlainText = (props) => <StyledText {...props} />;

export default PlainText;
