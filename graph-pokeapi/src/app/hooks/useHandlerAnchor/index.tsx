import { useState } from 'react'
import { type UseHandlerAnchor } from '../../Interfaces/hooks/UseAnchorNav'

export default function useHandlerAnchor(): UseHandlerAnchor {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const fnHandler = {
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
  }

  const states = {
    state: {
      anchorElNav,
      anchorElUser,
    },
    setState: {
      setAnchorElNav,
      setAnchorElUser,
    },
  }

  return { fnHandler, states }
}
