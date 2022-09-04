import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountries } from '../../store/actions/AppActions'
import { StyledCountries, StyledCountryCard } from './styles'

export const Countries = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.app.countries) || null
    useEffect(() => {
        if (!countries) dispatch(fetchCountries())
    }, [countries, dispatch])
    if (!countries) return <div>Loading</div>
    return (
        <StyledCountries countries={countries}>
            {countries.map(country => {
                return (
                    <StyledCountryCard key={country.name.common}>
                        <Link
                            to={`country/${country.name.common}`}
                            state={country}
                        >
                            <img
                                src={country.flags.svg}
                                alt={`flag ${country.name.common}`}
                                width="260"
                            />
                            <div className="card__body">
                                <h2>{country.name.common}</h2>
                                <div>
                                    <strong>Population:</strong>
                                    <p>{country.population}</p>
                                </div>
                                <div>
                                    <strong>Region</strong>
                                    <p>{country.region}</p>
                                </div>
                                <div>
                                    <strong>Capital</strong>
                                    <p>
                                        {country?.capital
                                            ? country.capital[0]
                                            : ''}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </StyledCountryCard>
                )
            })}
        </StyledCountries>
    )
}
