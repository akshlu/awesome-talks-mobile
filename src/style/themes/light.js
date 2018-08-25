import { Platform } from 'react-native';

const colors = {
    primary: '#2bb3ce',
    additional: '#ffd83b',
    red: '#e71d36',
    dark: '#28464b',
    navBarBackgroundColor: 'white'
};

const fonts = {
    header: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: colors.dark
    },
    h2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.dark
    },
    plain: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        lineHeight: 22,
        color: 'rgba(40, 70, 75, 0.8)'
    },
    small: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        lineHeight: 17,
        color: 'rgba(40, 70, 75, 0.6)'
    },
    tag: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        lineHeight: 17,
        color: colors.primary
    }
};

const icons = {
    talksIconSelected: require('./light/assets/icons-toolbar/talks-24-a.png'),
    talksIcon: require('./light/assets/icons-toolbar/talks-24-p.png'),
    speakersIconSelected: require('./light/assets/icons-toolbar/speakers-24-a.png'),
    speakersIcon: require('./light/assets/icons-toolbar/speakers-24-p.png'),
    categoriesIconSelected: require('./light/assets/icons-toolbar/categories-24-a.png'),
    categoriesIcon: require('./light/assets/icons-toolbar/categories-24-p.png'),
    twitterIcon: require('./light/assets/twitter.png'),
    searchIcon: require('./light/assets/icons-toolbar/search-24-a.png'),
    serverError: require('./light/assets/server-error.png'),
    noInternet: require('./light/assets/no-internet.png')
};

const navigatorStyle = {
    // drawUnderNavBar: true,
    navBarTranslucent: true,
    // drawUnderTabBar: true,
    tabBarTranslucent: true,
    // navBarNoBorder: true,
    // navBarBackgroundColor: colors.navBarBackgroundColor,
    navBarTextFontSize: fonts.header.fontSize,
    navBarTextFontFamily: fonts.header.fontFamily,
    navBarTextFontWeight: fonts.header.fontWeight,
    navBarButtonFontFamily: fonts.header.fontFamily,
    navBarTextColor: colors.dark,
    navBarButtonColor: colors.dark,
    navBarButtonFontWeight: fonts.header.fontWeight,
    tabBarSelectedButtonColor: colors.primary,
    tabBarButtonColor: 'rgb(125, 143, 146)',
    screenBackgroundColor: 'white',
    orientation: 'portrait',

    ...Platform.select({
        android: {
            navBarTranslucent: false,
            statusBarColor: 'rgba(0,0,0,0.1)',
            statusBarTextColorScheme: 'light',
            drawUnderStatusBar: true,
            navBarTopPadding: 24,
            navBarBackgroundColor: colors.primary,
            navBarTextColor: 'white',
            navBarButtonColor: 'white',
            navBarTextFontBold: true,
            navBarTextFontFamily: 'Montserrat-SemiBold',

            // tabs
            tabBarSelectedButtonColor: colors.primary,
            tabBarButtonColor: 'rgb(125, 143, 146)',
            tabFontFamily: 'Montserrat-Medium',
            forceTitlesDisplay: true
        }
    })
};

const tabsStyle = {
    tabBarSelectedButtonColor: colors.primary,
    tabBarButtonColor: 'rgb(125, 143, 146)',
    tabBarTextFontFamily: 'Montserrat-Medium'
};

export default {
    colors,
    fonts,
    icons,
    navigatorStyle,
    tabsStyle
};
