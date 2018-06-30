import React from 'react';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts } = getCurrentTheme();

const StyledText = styled.Text({
    ...fonts.tag
});

const Tag = (props) => <StyledText {...props} />;

export default Tag;
