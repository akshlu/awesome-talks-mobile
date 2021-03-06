const colors = {
    primary: '#2bb3ce',
    additional: '#ffd83b',
    red: '#e71d36',
    dark: '#28464b',
    navBarBackgroundColor: 'white',
    greyTransparent08: 'rgba(40, 70, 75, 0.8)',
    white: '#fff'
};

const fonts = {
    header: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark
    },
    h2: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 20,
        color: colors.dark
    },
    plain: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        color: colors.greyTransparent08
    },
    small: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        fontWeight: '600',
        lineHeight: 17,
        color: 'rgba(40, 70, 75, 0.6)'
    },
    xSmall: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 12,
        color: colors.white
    },
    tag: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '600',
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
    tabBarButtonColor: 'rgb(125, 143, 146)'
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
