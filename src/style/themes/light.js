const colors = {
    primary: '#2bb3ce',
    additional: '#ffd83b',
    red: '#e71d36',
    dark: '#28464b',
    navBarBackgroundColor: 'white'
};

const fonts = {
    header: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold'
    },
    h2: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20
    },
    plain: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22
    },
    small: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 17,
        color: 'rgba(0.16, 0.27, 0.29, 0.6)'
    }
};

const navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    drawUnderTabBar: true,
    tabBarTranslucent: true,
    navBarNoBorder: true,

    navBarBackgroundColor: colors.navBarBackgroundColor,
    navBarTextFontSize: fonts.header.fontSize,
    navBarTextFontFamily: fonts.header.fontFamily,
    navBarTextFontWeight: fonts.header.fontWeight,
    navBarTextColor: colors.dark,
    navBarButtonColor: colors.dark
};

export default {
    colors,
    fonts,
    navigatorStyle
};
