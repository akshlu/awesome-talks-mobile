import { Navigation } from 'react-native-navigation';
import TalkScreen from './TalkScreen';
import TalksScreen from './TalksScreen';
import SpeakerScreen from './SpeakerScreen';
import SpeakersScreen from './SpeakersScreen';

export const screens = {
    TALK_SCREEN: 'AwesomeTalks.TalkScreen',
    TALKS_SCREEN: 'AwesomeTalks.TalksScreen',
    SPEAKER_SCREEN: 'AwesomeTalks.SpeakerScreen',
    SPEAKERS_SCREEN: 'AwesomeTalks.SpeakersScreen'
};

function registerScreen(screenName, screenComponent) {
    Navigation.registerComponent(screenName, () => screenComponent);
}

export function registerScreens() {
    registerScreen(screens.TALK_SCREEN, TalkScreen);
    registerScreen(screens.TALKS_SCREEN, TalksScreen);
    registerScreen(screens.SPEAKER_SCREEN, SpeakerScreen);
    registerScreen(screens.SPEAKERS_SCREEN, SpeakersScreen);
}
