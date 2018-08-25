import { getDurationString } from '../../src/services/calendar';

describe('getDurationString', () => {
    test('should return duration in hours and minutes', () => {
        expect(getDurationString(60 * 60 + 120)).toEqual('1:02:00');
        expect(getDurationString(180 * 60 + 60 * 45)).toEqual('3:45:00');
    });

    test('should return duration in minutes if duration is less than hour', () => {
        expect(getDurationString(60)).toEqual('01:00');
        expect(getDurationString(60 * 60)).toEqual('1:00:00');
    });

    test('should return seconds for duration less than minute', () => {
        expect(getDurationString(42)).toEqual('00:42');
    });

    test('should return 00:00 for duration with 0 seconds', () => {
        expect(getDurationString(0)).toEqual('00:00');
    });
});
