import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import {
    fetchCountryBorders,
    fetchCountryName,
} from '../../store/actions/AppActions'

export const Country = () => {
    const location = useLocation()
    const { name } = useParams()
    const countryState = location.state
    const dispatch = useDispatch()
    const { countryBorders, country } = useSelector(state => state.app)
    const localCountry = countryState || country
    useEffect(() => {
        let codes = ''
        if (countryState || country) {
            const countryData = countryState || country
            codes = countryData.borders.join(',')
            dispatch(fetchCountryBorders(codes))
        } else {
            dispatch(fetchCountryName(name))
        }
    }, [countryState, country, dispatch, name])
    if (!localCountry) return <div>Cargando country</div>
    return (
        <div>
            <h2>{localCountry.name.common}</h2>
            {!countryBorders ? (
                <div>Loading borders</div>
            ) : (
                <div>
                    {countryBorders.map(countryBorder => {
                        return (
                            <p key={countryBorder.name.common}>
                                {countryBorder.name.common}
                            </p>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
