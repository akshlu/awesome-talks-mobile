import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from './text/H2';
import SmallText from './text/SmallText';
import { getHashTag } from '../services/text';

const CategoryCardView = styled.TouchableOpacity({
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
});

export default class CategoryCard extends PureComponent {
    render() {
        return (
            <CategoryCardView onPress={this.props.onPress}>
                <H2>{getHashTag(this.props.item)}</H2>
                <SmallText>{this.props.item._videosMeta.count}</SmallText>
            </CategoryCardView>
        );
    }
}

CategoryCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func
};
