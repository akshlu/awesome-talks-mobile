import React from 'react';
import { View, Text } from 'react-native';

const TalksScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Talks</Text>
    </View>
);

TalksScreen.navigatorStyle = {
    largeTitle: true
};

export default TalksScreen;
