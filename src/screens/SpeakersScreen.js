import React from 'react';
import { View, Text } from 'react-native';

const SpeakersScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Speakers</Text>
    </View>
);

SpeakersScreen.navigatorStyle = {
    largeTitle: true
};

export default SpeakersScreen;
