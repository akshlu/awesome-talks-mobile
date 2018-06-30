import { getTagsString } from '../../src/services/text';

describe('getTagsString', () => {
    test('should return string with lower cased hash tags', () => {
        const tags = [
            { name: 'Video games' },
            { name: 'Ruby' },
            { name: 'Javascript' }
        ];
        expect(getTagsString(tags)).toEqual('#video games #ruby #javascript');
    });

    test('should return empty string for empty tag list', () => {
        expect(getTagsString([])).toEqual('');
    });
});
