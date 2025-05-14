import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import { Box, Grid } from '@mui/material'

const Layout = () => {
	return (
		<Box sx={{ width: '100vw', height: "100vh" }} >
			<Navbar />
			<Box sx={{ display: "flex", justifyContent: "space-between" }} >
				<Box>
					<Sidebar />
				</Box>
				<Box>

				</Box>
				<Outlet />
			</Box>
		</Box>
	)
}

export default Layout

// < div className = 'row' >
// 		<div className="col-md-2">
// 			<Sidebar  />
// 		</div>
// 		<div className="col-md-10">
// 			<Navbar />
// 			<Outlet />
// 		</div>

// 	</div >