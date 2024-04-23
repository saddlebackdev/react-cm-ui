/**
 * To run this test:
 * npx jest ./src/inputs/datePickerInput/__test__/momentLocales.test.js
 */
import moment from 'moment-timezone';

describe('Moment Locales', () => {
    it.each([
        ['en-US', 'en'],
        ['de-DE', 'de'],
        ['es-US', 'es-us'],
        ['es-MX', 'es-mx'],
        ['es-AR', 'es'],
        ['fil-PH', 'fil'],
        // These don't work!  So we might need to be careful how we handle them!
        // ['zh-Hans-HK', 'zh-hk'],
        // ['zh-Hant-HK', 'zh-hk'],
        // These work
        ['zh-CN', 'zh-cn'], // Mainland China - Simplified (Hans)
        ['zh-HK', 'zh-hk'], // Hong Kong - Traditional (Hant)
    ])('Can change locale to \'%s\'', (specifiedLocale, expectedResolvedLocale) => {
        const momentObj = moment();
        momentObj.locale(specifiedLocale);
        expect(momentObj.locale()).toEqual(expectedResolvedLocale);
    });

    it('Can use \'de\' (German [Deutsch]) locale', () => {
        const deLocaleData = moment.localeData('de');
        expect(deLocaleData.longDateFormat('L')).toEqual('DD.MM.YYYY');
        expect(deLocaleData.weekdays()).toEqual(['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']);
        expect(deLocaleData.weekdaysMin()).toEqual(['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']);
        expect(deLocaleData.weekdaysShort()).toEqual(['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']);
        expect(deLocaleData.months()).toEqual(['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']);
        expect(deLocaleData.monthsShort()).toEqual(['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.']);
    });

    it('Can use \'es\' (Spanish [Español]) locale', () => {
        const esLocaleData = moment.localeData('es');
        expect(esLocaleData.longDateFormat('L')).toEqual('DD/MM/YYYY');
        expect(esLocaleData.weekdays()).toEqual(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']);
        expect(esLocaleData.weekdaysMin()).toEqual(['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá']);
        expect(esLocaleData.weekdaysShort()).toEqual(['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.']);
        expect(esLocaleData.months()).toEqual(['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
        expect(esLocaleData.monthsShort()).toEqual(['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.']);
    });

    it('Can use \'es-US\' (Spanish [Español] - U.S.) locale', () => {
        const esUsLocaleData = moment.localeData('es-US');
        expect(esUsLocaleData.longDateFormat('L')).toEqual('MM/DD/YYYY');
        expect(esUsLocaleData.weekdays()).toEqual(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']);
        expect(esUsLocaleData.weekdaysMin()).toEqual(['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá']);
        expect(esUsLocaleData.weekdaysShort()).toEqual(['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.']);
        expect(esUsLocaleData.months()).toEqual(['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
        expect(esUsLocaleData.monthsShort()).toEqual(['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.']);
    });

    it('Can use \'fil\' (Filipino) locale', () => {
        const filLocaleData = moment.localeData('fil');
        expect(filLocaleData.longDateFormat('L')).toEqual('MM/D/YYYY');
        expect(filLocaleData.weekdays()).toEqual(['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']);
        expect(filLocaleData.weekdaysMin()).toEqual(['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sab']);
        expect(filLocaleData.weekdaysShort()).toEqual(['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']);
        expect(filLocaleData.months()).toEqual(['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']);
        expect(filLocaleData.monthsShort()).toEqual(['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']);
    });
});
