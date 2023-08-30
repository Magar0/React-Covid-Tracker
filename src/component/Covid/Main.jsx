import React, { useEffect, useState } from 'react'
import "./style.css"

import { Route, Routes } from 'react-router-dom'
import Country from './route/Country'
import State from './route/State'
import NavFoot from './NavFoot'



const Main = () => {

    const [data, setData] = useState([])
    const [total, setTotal] = useState([])


    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json")
            const received = await res.json()
            setData(received.statewise)
            setTotal(received.statewise[0])

        }
        catch (err) {
            console.log("the error is", err);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>

            <Routes>
                <Route path='/' element={<NavFoot />}>
                    <Route index element={<Country data={total} />} />
                    <Route path='/statewise' element={<State data={data} />} />
                </Route>
            </Routes>


            {/* <Routes>

                    <Route path='/' element={<Country data={total} />} />
                    <Route path='/statewise' element={<State data={data} />} />

                </Routes> */}
        </>
    )
}

export default Main;