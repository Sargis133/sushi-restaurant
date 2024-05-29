import type {I_ReserveData, I_ReserveDataError} from "~/components/reserve/models/interfaces";

export const checkReserveDataFunc = (reserveData: I_ReserveData): I_ReserveDataError => {
    const errors: I_ReserveDataError = {
        name: '',
        phone: '',
        email: '',
        guests: '',
        date: '',
        time: '',
    }

    errors.email = onValidateEmailFunc(reserveData.email) ? '' : 'Email incorrect';
    errors.name = reserveData.name?.length < 2 ? 'Name incorrect' : '';
    errors.phone = reserveData.phone?.length < 6 ? 'Phone incorrect' : '';
    errors.guests = reserveData.guests ? '' : 'Select guests';
    errors.date = reserveData.date ? '' : 'Select date';
    errors.time = reserveData.time ? '' : 'Select time';

    function onValidateEmailFunc(value: string) {
        let regexp = /^[A-Za-z0-9]+\@[a-z]+\.[a-z]+/g;
        return regexp.test(value)
    }

    return errors
}