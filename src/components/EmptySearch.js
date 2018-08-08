import React from 'react';
import { View, Image } from 'react-native';
import SmallText from './text/SmallText';
import { getCurrentTheme } from '../style';

const theme = getCurrentTheme();

export default class EmptySearch extends React.PureComponent {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image size={25} source={theme.icons.searchIcon} />
                <SmallText>Type something for search</SmallText>
            </View>
        );
    }
}
