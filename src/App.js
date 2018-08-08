import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './screens';
import { getCurrentTheme } from './style/index';

const { navigatorStyle, tabsStyle, icons } = getCurrentTheme();

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Talks',
            screen: screens.TALKS_SCREEN,
            title: 'Talks',
            icon: icons.talksIcon,
            selectedIcon: icons.talksIconSelected
        },
        {
            label: 'Speakers',
            screen: screens.SPEAKERS_SCREEN,
            title: 'Speakers',
            icon: icons.speakersIcon,
            selectedIcon: icons.speakersIconSelected
        },
        {
            label: 'Categories',
            screen: screens.CATEGORIES_SCREEN,
            title: 'Categories',
            icon: icons.categoriesIcon,
            selectedIcon: icons.categoriesIconSelected
        },
        {
            label: 'Search',
            screen: screens.SEARCH_SCREEN,
            title: 'Search',
            icon: icons.searchIcon,
            selectedIcon: icons.searchIcon
        }
    ],
    appStyle: navigatorStyle,
    tabsStyle: tabsStyle
});
