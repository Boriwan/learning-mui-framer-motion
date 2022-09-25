import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function CocoDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <IconButton size='large' edge='start' style={{ color: "aquamarine" }} onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='left'
        open={isOpen}
        onClick={() => setIsOpen(false)}>
        <Box id='menu' width={"20rem"} height>
          <h1>Side Panel</h1>
          <p>Commodo mollit eu eu ea laborum qui proident labore. Laboris officia in elit anim quis non aliqua fugiat fugiat pariatur consectetur. Pariatur cillum tempor aliquip tempor cupidatat laboris deserunt Lorem. Cillum esse ipsum aliqua nisi reprehenderit esse duis cupidatat duis occaecat deserunt sit culpa. Nisi sunt ullamco dolor dolor.</p>
        </Box>
      </Drawer>
    </>
  )
}
