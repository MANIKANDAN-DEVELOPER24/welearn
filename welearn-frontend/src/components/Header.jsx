import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({ user, setUser, cartCount }) {
  const nav = useNavigate()

  const logout = () => {
    setUser(null)
    localStorage.removeItem('welearn_user')
    nav('/')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          WeLearn
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Courses</Button>
          {!user && <Button color="inherit" component={Link} to="/login">Login</Button>}
          {!user && <Button color="inherit" component={Link} to="/register">Register</Button>}
          {user && user.role !== 'admin' && <Button color="inherit" component={Link} to="/cart">Cart ({cartCount})</Button>}
          {user && user.role === 'admin' && <Button color="inherit" component={Link} to="/admin">Admin</Button>}
          {user && <Button color="inherit" onClick={logout}>Logout</Button>}
        </Box>
      </Toolbar>
      
    </AppBar>
    
  )
}
