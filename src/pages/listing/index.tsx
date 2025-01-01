/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  TextField,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { rows, columns } from "../../data/table";
import Datagrid from "../../components/listing/dataGrid";

export const formattedColumns = columns.map((col) => {
  if (col.field === "amount") {
    return {
      ...col,
      renderCell: (params: any) => `₹${params.value.toLocaleString("en-IN")}`,
    };
  }
  return col;
});

const ListingPage = () => {
  const [deposit, setDeposit] = useState(rows[rows.length - 1]?.amount || 0); // Initialize with the last amount
  const [withdrawal, setWithdrawal] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#f0ffff", color: "#000" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hi, Welcome Sadequa
          </Typography>
          <IconButton onClick={handleAvatarClick}>
            <Avatar
              sx={{
                backgroundColor: "#d3d3d3",
                color: "#000",
                width: 40,
                height: 40,
              }}
              alt="Sadequa"
              src="/avatar.png"
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" /> {/* Add the Logout icon */}
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          padding: "20px 40px",
          backgroundColor: "#f9f9f9",
          borderRadius: 1,
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={10}>
          <Box
            sx={{
              mt: 0,
              pr: 6,
              pt: 2,
              pb: 2,
              display: "flex",
              flexDirection: "column",
              // gap: 3,
              backgroundColor: "#f9f9f9",
              borderRadius: 1,
              mb: 0,
            }}
          >
            {[
              { label: "Deposit", value: deposit, setter: setDeposit },
              { label: "Withdrawal", value: withdrawal, setter: setWithdrawal },
            ].map(({ label, value, setter }, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  height: 56, // Ensure consistent height
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", width: 120 }}
                >
                  {label}
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  sx={{ maxWidth: "200px" }}
                  InputProps={{
                    inputProps: { min: 0, type: "number" },
                    startAdornment: "₹",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              This is a 5 year lock in investment plan!
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" gutterBottom>
          Monthly Returns
        </Typography>
        <Datagrid rows={rows} columns={formattedColumns} />
      </Box>
    </>
  );
};

export default ListingPage;
