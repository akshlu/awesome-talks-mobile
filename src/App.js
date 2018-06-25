import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './screens';
import { getCurrentTheme } from './style/index';

const { navigatorStyle } = getCurrentTheme();

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
    appStyle: navigatorStyle
});
