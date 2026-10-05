import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Dashboardlayout = () => {
return (
    <>
    <div className='dashboard'>
        <Sidebar/>

        <main style={{marginLeft: "260px", maxHeight: '100dvh'}}>
            <Outlet/>
        </main>
    </div>
    </>
)
}

export default Dashboardlayout