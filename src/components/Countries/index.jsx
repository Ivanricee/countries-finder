import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../../store/actions/AppActions'
import { StyledCountries } from './styles'

export const Countries = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.app.countries) || null
    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])
    console.log('countries ', countries)
    if (!countries) return <div>Loading</div>
    return (
        <StyledCountries countries={countries}>
            {countries.map(country => {
                return (
                    <>
                        <div>{country.name.common}</div>
                        {
                            // <img src={country.flags.svg} />
                        }
                    </>
                )
            })}
        </StyledCountries>
    )
}
