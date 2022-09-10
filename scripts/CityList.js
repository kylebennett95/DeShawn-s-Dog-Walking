import { getCities } from "./database.js"

const walkers = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

