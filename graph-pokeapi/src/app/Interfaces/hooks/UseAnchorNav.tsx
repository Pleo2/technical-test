export interface UseHandlerAnchor {
  fnHandler: {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
    handleCloseNavMenu: () => void
    handleCloseUserMenu: () => void
  }
  states: {
    state: {
      anchorElNav: null | HTMLElement
      anchorElUser: null | HTMLElement
    }
    setState: {
      setAnchorElNav: React.Dispatch<React.SetStateAction<null | HTMLElement>>
      setAnchorElUser: React.Dispatch<React.SetStateAction<null | HTMLElement>>
    }
  }
}
