import { Navigation } from 'react-native-navigation';
import TalksScreen from './TalksScreen';
import SpeakersScreen from './SpeakersScreen';

export const screens = {
    TALKS_SCREEN: 'AwesomeTalks.TalksScreen',
    SPEAKERS_SCREEN: 'AwesomeTalks.SpeakersScreen'
};

export function registerScreens() {
    Navigation.registerComponent(screens.SPEAKERS_SCREEN, () => SpeakersScreen);
    Navigation.registerComponent(screens.TALKS_SCREEN, () => TalksScreen);
}
