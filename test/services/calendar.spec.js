import { getDurationString } from '../../src/services/calendar';

describe('getDurationString', () => {
    test('should return duration in hours and minutes', () => {
        expect(getDurationString(60 * 60 + 120)).toEqual('1h 2m');
        expect(getDurationString(180 * 60 + 60 * 45)).toEqual('3h 45m');
    });

    test('should return duration in minutes if duration is less than hour', () => {
        expect(getDurationString(60)).toEqual('1m');
        expect(getDurationString(60 * 60)).toEqual('1h');
    });

    test('should return hours without "m" if minutes equals 0', () => {
        expect(getDurationString(60 * 60)).toEqual('1h');
    });

    test('should return seconds for duration less than minute', () => {
        expect(getDurationString(42)).toEqual('42s');
    });

    test('should return 0s for duration with 0 seconds', () => {
        expect(getDurationString(0)).toEqual('0s');
    });
});
