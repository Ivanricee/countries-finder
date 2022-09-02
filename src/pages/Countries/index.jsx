import React from 'react'
import { Helmet } from 'react-helmet'
import { StyledCountries } from './styles'
import { FilterCountries } from '../../components/FilterCountries'

export const Countries = () => {
    return (
        <StyledCountries>
            <Helmet>
                <title> Countries </title>
                <meta name="description" content="List of countries" />
            </Helmet>
            <FilterCountries />
        </StyledCountries>
    )
}
