import React from 'react';
import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { fonts } = getCurrentTheme();

const StyledText = styled.Text({
    ...fonts.header
});

const Header = (props) => <StyledText {...props} />;

export default Header;
