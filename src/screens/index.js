import { Navigation } from 'react-native-navigation';
import TalkScreen from './TalkScreen';
import TalksScreen from './TalksScreen';
import SpeakerScreen from './SpeakerScreen';
import SpeakersScreen from './SpeakersScreen';
import CategoryScreen from './CategoryScreen';
import CategoriesScreen from './CategoriesScreen';

export const screens = {
    TALK_SCREEN: 'AwesomeTalks.TalkScreen',
    TALKS_SCREEN: 'AwesomeTalks.TalksScreen',
    SPEAKER_SCREEN: 'AwesomeTalks.SpeakerScreen',
    SPEAKERS_SCREEN: 'AwesomeTalks.SpeakersScreen',
    CATEGORY_SCREEN: 'AwesomeTalks.CategoryScreen',
    CATEGORIES_SCREEN: 'AwesomeTalks.CategoriesScreen'
};

function registerScreen(screenName, screenComponent) {
    Navigation.registerComponent(screenName, () => screenComponent);
}

export function registerScreens() {
    registerScreen(screens.TALK_SCREEN, TalkScreen);
    registerScreen(screens.TALKS_SCREEN, TalksScreen);
    registerScreen(screens.SPEAKER_SCREEN, SpeakerScreen);
    registerScreen(screens.SPEAKERS_SCREEN, SpeakersScreen);
    registerScreen(screens.CATEGORY_SCREEN, CategoryScreen);
    registerScreen(screens.CATEGORIES_SCREEN, CategoriesScreen);
}
