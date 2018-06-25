import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './screens';
import { getCurrentTheme } from './style/index';

const theme = getCurrentTheme();

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
        drawUnderNavBar: true,
        navBarTranslucent: true,
        drawUnderTabBar: true,
        tabBarTranslucent: true,

        navBarTextFontSize: theme.fonts.header.fontSize,
        navBarTextFontFamily: theme.fonts.header.fontFamily,
        navBarTextFontWeight: 'bold',
        navBarTextColor: theme.colors.dark
    }
});
