import themes from './themes';

export function getTheme(themeName) {
    if (!themes.hasOwnProperty(themeName)) {
        return null;
    }
    return themes[themeName];
}

export function getDefaultTheme() {
    return getTheme('light');
}

export function getCurrentTheme() {
    // TODO: implement this
    return getDefaultTheme();
}
