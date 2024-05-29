export interface I_ReserveData {
    name: string,
    phone: string,
    email: string,
    guests: number | null,
    date: string,
    time: string,
}

export interface I_ReserveDataError extends Omit<I_ReserveData, 'guests'> {
    guests: string,
}