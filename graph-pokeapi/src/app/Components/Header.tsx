'use client'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import useHandlerAnchor from '../hooks/useHandlerAnchor'
<<<<<<< HEAD
import Link from 'next/link'


const pages = ['NAME-2D', '3D-NAME', '3D-POKEMON']
=======

const pages = ['Basic Poke Name - 2D', '3D - Poke Name', '3D-Pokemon']
>>>>>>> parent of 973d8b1... feat(Name-2D): :sparkles: add graph NAME 2D and style changes in the header

export default function Header(): JSX.Element {
  const {
    fnHandler,
    states: { state },
  } = useHandlerAnchor()

  return (
    <AppBar
      position="static"
      color="secondary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Graph-Pokemon
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={fnHandler.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={state.anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(state.anchorElNav)}
              onClose={fnHandler.handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page}
                  onClick={fnHandler.handleCloseNavMenu}
<<<<<<< HEAD
                  sx={{
                    mt: 1.5,
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                  }}
                >
                  <Link href={`/${page}`}>{page}</Link>
                </Button>
=======
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
>>>>>>> parent of 973d8b1... feat(Name-2D): :sparkles: add graph NAME 2D and style changes in the header
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Graph-Pokemon
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={fnHandler.handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={state.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(state.anchorElUser)}
              onClose={fnHandler.handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
