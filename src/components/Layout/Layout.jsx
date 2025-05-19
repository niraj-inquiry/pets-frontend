import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import { Box, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const Layout = () => {
	const isOpen = useSelector(state => state.common.isOpen)

	return (
		<Box sx={{
			backgroundColor: "#f4f4f4"
		}} >
			<Navbar />
			<Box sx={{ display: "flex", justifyContent: "space-between" }} >
				<Box sx={{ width: isOpen ? "15%" : '5%' }} >
					<Sidebar />
				</Box>
				<Box sx={{ width: isOpen ? "82%" : '95%' }} >
					<Outlet />
				</Box>

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