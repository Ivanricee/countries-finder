import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'

import { Countries } from '../pages/Countries'
import { Country } from '../pages/Country'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../components/Layout'

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Countries />} />
                        <Route path="/country/:code" element={<Country />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}
