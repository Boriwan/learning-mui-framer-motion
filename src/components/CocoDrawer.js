import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

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
          <h1>🥥 Drawer</h1>
          <Stack
            alignItems="flex-start"
            justifyContent="space-between"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}>
            <h3> </h3>
            <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Coconut'>Read more about 🥥</a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=w0AOGeqOnFY'>Watch a 🥥 video</a>
            <a target="_blank" rel="noopener noreferrer" href='https://saverafresh.com/wp-content/uploads/2021/08/coconut.jpg'>Look at a 🥥</a>
            <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Coconut'>Read more about 🥥</a>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
