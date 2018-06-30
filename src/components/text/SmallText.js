import React from 'react';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts } = getCurrentTheme();

const StyledText = styled.Text({
    ...fonts.small
});

const SmallText = (props) => <StyledText {...props} />;

export default SmallText;
