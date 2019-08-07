import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadCountriesByRegion } from '../queries'
import { listCountries } from '../actions'

const useCountriesByRegion = () => {
    const [{ country }, dispatch] = useStateValue()
    const [isLoading, setIsLoading] = useState(false)

    const request = async (name) => {
        setIsLoading(true)

        const response = await loadCountriesByRegion(name);

        if (response) {
            dispatch(listCountries(response))
        } else {
            const err = []
            dispatch(listCountries(err))
        }
        setIsLoading(false)
    }

    return [country, request]
}

export default useCountriesByRegion
