import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  InputAdornment,
  Card,
  CardContent,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  CurrencyRupee,
  Favorite,
  VolunteerActivism,
  Info,
} from "@mui/icons-material";

const predefinedAmounts = [500, 1000, 2000, 5000];

function Donation() {
  const theme = useTheme();
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [activeAmount, setActiveAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    panCard: "",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount("");
    setActiveAmount(value);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setCustomAmount(value);
      setAmount("custom");
      setActiveAmount(null);
    }
  };

  const handleDonorInfoChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: "Thank you for your donation!",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        py={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <VolunteerActivism
                sx={{
                  fontSize: 100,
                  color: theme.palette.primary.main,
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                  mb: 3,
                }}
              />
            </motion.div>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
              }}
            >
              Make a Difference Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                margin: "0 auto",
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
              }}
            >
              Your contribution helps us create lasting change in our community.
              Every donation, no matter the size, brings hope to those in need.
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.dark,
                      mb: 3,
                    }}
                  >
                    Select Your Donation Amount
                  </Typography>

                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {predefinedAmounts.map((preset) => (
                      <Grid item xs={6} sm={3} key={preset}>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            fullWidth
                            variant={
                              activeAmount === preset ? "contained" : "outlined"
                            }
                            color={
                              activeAmount === preset ? "primary" : "inherit"
                            }
                            onClick={() => handleAmountSelect(preset)}
                            sx={{
                              height: 80,
                              borderRadius: 2,
                              border:
                                activeAmount === preset ? "none" : "2px solid",
                              borderColor: theme.palette.primary.light,
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              transition: "all 0.3s ease",
                              boxShadow:
                                activeAmount === preset
                                  ? theme.shadows[4]
                                  : "none",
                            }}
                          >
                            ₹{preset.toLocaleString()}
                          </Button>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Info color="primary" fontSize="small" />
                    Or enter a custom amount
                  </Typography>

                  <TextField
                    fullWidth
                    label="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    sx={{ mb: 4 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                      sx: {
                        fontSize: "1.1rem",
                        "& input": {
                          padding: "14px 14px 14px 0",
                        },
                      },
                    }}
                    inputProps={{
                      min: 100,
                      step: 100,
                    }}
                    type="number"
                  />

                  <Divider
                    sx={{
                      mb: 4,
                      borderColor: theme.palette.divider,
                      borderBottomWidth: 2,
                    }}
                  />

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.dark,
                      mb: 3,
                    }}
                  >
                    Your Information
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={donorInfo.name}
                        onChange={handleDonorInfoChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        value={donorInfo.email}
                        onChange={handleDonorInfoChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={donorInfo.phone}
                        onChange={handleDonorInfoChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="PAN Card Number"
                        name="panCard"
                        value={donorInfo.panCard}
                        onChange={handleDonorInfoChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 6, textAlign: "center" }}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Favorite />}
                        sx={{
                          minWidth: 250,
                          py: 2,
                          px: 4,
                          borderRadius: 3,
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          boxShadow: `0 4px 15px ${theme.palette.primary.light}`,
                        }}
                      >
                        {loading ? "Processing..." : "Donate Now"}
                      </Button>
                    </motion.div>
                  </Box>
                </form>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: `linear-gradient(145deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    color: "white",
                    boxShadow: theme.shadows[8],
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 8px 24px ${theme.palette.primary.light}80`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          background: "rgba(255,255,255,0.2)",
                          borderRadius: "50%",
                          p: 1.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Info sx={{ fontSize: 32 }} />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        Your Impact Matters
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      {[
                        {
                          amount: "₹500",
                          text: "can provide meals for 5 children",
                        },
                        {
                          amount: "₹1000",
                          text: "can support education for 1 child",
                        },
                        {
                          amount: "₹2000",
                          text: "can fund medical care for 2 people",
                        },
                        {
                          amount: "₹5000",
                          text: "can help build shelter for a family",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                              gap: 2,
                              p: 1.5,
                              background: "rgba(255,255,255,0.1)",
                              borderRadius: 2,
                            }}
                          >
                            <Box
                              sx={{
                                background: theme.palette.secondary.main,
                                color: theme.palette.secondary.contrastText,
                                borderRadius: 1,
                                px: 1.5,
                                py: 0.5,
                                fontWeight: 700,
                                minWidth: 70,
                                textAlign: "center",
                              }}
                            >
                              {item.amount}
                            </Box>
                            <Typography variant="body1" sx={{ flex: 1 }}>
                              {item.text}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>

                    <Divider
                      sx={{
                        my: 3,
                        borderColor: "rgba(255,255,255,0.3)",
                        borderBottomWidth: 2,
                      }}
                    />

                    <Box
                      sx={{
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: 2,
                        p: 2,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        All donations are tax-exempt under Section 80G of the
                        Income Tax Act.
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ opacity: 0.8, mt: 1, display: "block" }}
                      >
                        Tax benefits vary by country
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          elevation={6}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Donation;
