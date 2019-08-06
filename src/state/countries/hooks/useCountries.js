import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadCountries } from '../queries'
import { listCountries } from '../actions'

const useCountries = () => {
    const [{ countries }, dispatch] = useStateValue()
    const [isLoading, setIsLoading] = useState(false)

    const request = async () => {
        setIsLoading(true)

        const response = await loadCountries();

        if (response) {
            dispatch(listCountries(response))
        } else {
            const err = []
            dispatch(listCountries(err))
        }
        setIsLoading(false)
    }

    return [countries, isLoading, request]
}

export default useCountries
