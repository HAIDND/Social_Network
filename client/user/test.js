import React, { useState } from 'react';
import { Drawer, Box, Button, Backdrop } from '@mui/material/core';

const test = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      {/* Nút để mở pop-up */}
      <Button variant="contained" onClick={toggleDrawer}>
        Open Pop-up
      </Button>

      {/* Backdrop để đóng pop-up khi click bên ngoài */}
      <Backdrop
        open={isDrawerOpen}
        onClick={closeDrawer}
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
      />

      {/* Drawer hiển thị bên phải */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          role="presentation"
          sx={{ width: 300, padding: 2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Pop-up Content</h3>
          <p>This is the content inside the pop-up on the right side.</p>
        </Box>
      </Drawer>
    </div>
  );
};

export default test;
