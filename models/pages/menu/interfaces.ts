export interface I_Products {
    name: string,
    description: string,
    price: string,
    image: string,
    list?: boolean,
}
export interface I_Categories {
    category: string,
    products: I_Products[],
}
