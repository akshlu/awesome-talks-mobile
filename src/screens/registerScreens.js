import { Navigation } from 'react-native-navigation';
import TalksScreen from './TalksScreen';
import SpeakersScreen from './SpeakersScreen';

export function registerScreens() {
    Navigation.registerComponent(
        'AwesomeTalks.SpeakersScreen',
        () => SpeakersScreen
    );
    Navigation.registerComponent('AwesomeTalks.TalksScreen', () => TalksScreen);
}
