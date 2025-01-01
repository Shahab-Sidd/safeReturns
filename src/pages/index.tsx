import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Card,
} from "@mui/material";
import Image from "next/image";
import { AccountCircle, Lock } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // For error messages
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false); // For Snackbar visibility
  const router = useRouter();

  const handleLogin = () => {
    if (username === "Sadequabi" && password === "Sad@9890460986") {
      setError(null); // Reset any previous errors
      router.push("/listing");
      // Redirect to home page or dashboard
    } else {
      setError("Invalid username or password");
      setOpenSnackbar(true); // Show error message
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff5f5",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          textAlign: "center",
          marginLeft: 2,
        }}
      >
        <Image
          alt="strategy-illustration"
          src={"./public/stock1.jpeg"}
          style={{
            width: "100%",
            maxWidth: "900px",
            marginBottom: 16,
            borderRadius: "10px",
          }}
          width={650}
          height={415}
        />
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, textAlign: "center" }}
        >
          The name of website team has been actively involved in computer
          programming and trading the forex markets since 2019. The name of
          website strategy is a culmination of 5 years of programming experience
          combined with 5 years of active trading, analysis, and observance of
          market consistencies when reacting to certain conditions.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, textAlign: "center" }}
        >
          The result is a semi-automated, multi-phase strategy that can filter
          and identify high probability trades, cut losses as needed, and evolve
          and adapt to ever-changing market conditions. Certain parameters of
          the strategy are reviewed at least quarterly and adjusted in
          accordance with the most recent market data.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, textAlign: "center", fontWeight: 600 }}
        >
          What we offer
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          We provide the opportunity to enter the Market backed by our team’s
          experience and expertise and help you eliminate your emotions from
          trading. We intend to provide safe returns averaging between 4% to 8%
          annually.
        </Typography>
      </Box>
      <Box
        sx={{
          p: [6, 12],
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff5f5",
        }}
      >
        <Card sx={{ p: 6 }}>
          <Image
            alt="strategy-illustration"
            src={"./loginImg.jpeg"}
            style={{
              width: "100%",
              maxWidth: "400px",
              marginBottom: 16,
              borderRadius: "10px",
            }}
            width={250}
            height={220}
          />
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Box sx={{ my: 6 }}>
              <Typography
                sx={{
                  mb: 1.5,
                  fontWeight: 500,
                  fontSize: "1.625rem",
                  lineHeight: 1.385,
                }}
              >
                Welcome! 👋🏻
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Please sign-in to your account and start exploring.
              </Typography>
            </Box>

            {/* <Alert
              icon={false}
              sx={{
                py: 3,
                mb: 6,
                backgroundColor: "lightblue",
                "& .MuiAlert-message": { p: 0 },
              }}
            >
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                Custom Text: <strong>Bold Custom text</strong>
              </Typography>
            </Alert> */}

            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <IconButton sx={{ color: blue[500] }}>
                    <AccountCircle />
                  </IconButton>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <IconButton sx={{ color: blue[500] }}>
                    <Lock />
                  </IconButton>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                {error}
              </Alert>
            </Snackbar>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginPage;
