import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/registerScreens';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Talks',
            screen: 'AwesomeTalks.TalksScreen',
            title: 'Talks'
        },
        {
            label: 'Speakers',
            screen: 'AwesomeTalks.SpeakersScreen',
            title: 'Speakers'
        }
    ]
});
