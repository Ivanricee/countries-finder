import React from 'react'
import { Helmet } from 'react-helmet'
import { StyledHome } from './styles'
import { FilterCountries } from '../../components/FilterCountries'
import { Countries } from '../../components/Countries'

export const Home = () => {
    return (
        <StyledHome>
            <Helmet>
                <title> Countries </title>
                <meta name="description" content="List of countries" />
            </Helmet>
            <FilterCountries />
            <Countries />
        </StyledHome>
    )
}
