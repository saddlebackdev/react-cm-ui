/**
 * To run this test:
 * npx jest ./src/inputs/datePickerInput/__test__/momentLocales.test.js
 */
import 'moment/locale/es'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment-timezone';

describe('Moment Locales', () => {
    it('Can use \'es\' locale', () => {
        const esLocaleData = moment.localeData('es');
        expect(esLocaleData.longDateFormat('L')).toEqual('DD/MM/YYYY');
        expect(esLocaleData.weekdays()).toEqual(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']);
        expect(esLocaleData.weekdaysShort()).toEqual(['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.']);
        expect(esLocaleData.months()).toEqual(['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
        expect(esLocaleData.monthsShort()).toEqual(['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.']);
    });
});
