import styled from 'styled-components';
import { getCurrentTheme } from '../../style';

const { colors } = getCurrentTheme();

const Separator = styled.View({
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
    opacity: 0.1
});

export default Separator;
