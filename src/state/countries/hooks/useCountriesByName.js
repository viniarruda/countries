import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadCountriesByName } from '../queries'
import { listCountries } from '../actions'

const useCountriesByName = () => {
    const [{ searchCountry }, dispatch] = useStateValue()
    const [isLoading, setIsLoading] = useState(false)

    const request = async (name) => {
        setIsLoading(true)

        const response = await loadCountriesByName(name);

        if (response) {
            dispatch(listCountries(response))
        } else {
            const err = []
            dispatch(listCountries(err))
        }
        setIsLoading(false)
    }

    return [searchCountry, request]
}

export default useCountriesByName
