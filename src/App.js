import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Talks',
            screen: screens.TALKS_SCREEN,
            title: 'Talks'
        },
        {
            label: 'Speakers',
            screen: screens.SPEAKERS_SCREEN,
            title: 'Speakers'
        }
    ],
    appStyle: {
        largeTitle: true
    }
});
