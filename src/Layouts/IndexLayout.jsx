import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'

import HeroPage from '../Pages/HeroPage/HeroPage'

export default function IndexLayout() {
    return (
        <div>
            <Header />
            <HeroPage />
            <ButonScroll />

        </div>
    )
}
