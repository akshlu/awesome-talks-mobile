import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './screens';
import { getCurrentTheme } from './style/index';

const { colors, fonts } = getCurrentTheme();

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

        navBarTextFontSize: fonts.header.fontSize,
        navBarTextFontFamily: fonts.header.fontFamily,
        navBarTextFontWeight: fonts.header.fontWeight,
        navBarTextColor: colors.dark,
        navBarButtonColor: colors.dark
    }
});
