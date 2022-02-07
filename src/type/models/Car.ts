export interface ICar {
    id: number,
    make: string,
    image: string,
    type: string,
    models: IModel[]
}

export interface IModel {
    model: string,
    price: string,
    dateAvailability: string
}