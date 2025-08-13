import React from 'react'
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material'
import AdminUsers from './AdminUsers'
import AdminAddCourse from './AdminAddCourse'
import AdminOffers from './AdminOffers'

export default function AdminDashboard() {
  const [tab, setTab] = React.useState(0)
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Admin Dashboard</Typography>
      <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Users" />
        <Tab label="Add Course" />
        <Tab label="Offers" />
      </Tabs>
      <Box>
        {tab === 0 && <AdminUsers />}
        {tab === 1 && <AdminAddCourse />}
        {tab === 2 && <AdminOffers />}
      </Box>
    </Paper>
  )
}
