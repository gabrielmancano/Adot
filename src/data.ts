import { ImageProps } from "react-native"

export interface Annimal {
    name: string,
    breed: string,
    age: number,
    photo: ImageProps["source"]
}

export const CatsList: Annimal[] = [
        {
            name: "Chico",
            breed: "persa",
            age: 9,
            photo: require('./assets/cats/persa.jpg'),
        },
        {
            name: "Tom",
            breed: "siamês",
            age: 3,
            photo: require('./assets/cats/siames.jpg')
        },
        {
            name: "Frajola",
            breed: "sphynx",
            age: 14,
            photo: require('./assets/cats/sphynx.png')
        },
        {
            name: "Mingau",
            breed: "bengala",
            age: 2,
            photo: require('./assets/cats/bengal.jpg')
        },
    ]

    export const DogsList: Annimal[] = [
        {
            name: "Bob",
            breed: "buldogue",
            age: 2,
            photo: require('./assets/dogs/buldogue.png'),
        },
        {
            name: "Simba",
            breed: "golden",
            age: 13,
            photo: require('./assets/dogs/golden.jpg')
        },
        {
            name: "Thor",
            breed: "boxer",
            age: 17,
            photo: require('./assets/dogs/boxer.jpg')
        },
        {
            name: "Bela",
            breed: "pug",
            age: 4,
            photo: require('./assets/dogs/pug.png')
        },
    ]