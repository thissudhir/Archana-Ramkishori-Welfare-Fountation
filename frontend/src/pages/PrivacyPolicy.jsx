import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  useTheme,
  Divider,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Download, Article, PrivacyTip } from "@mui/icons-material";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

const PrivacyPolicy = () => {
  const theme = useTheme();

  const termsContent = [
    {
      title: "Privacy Policy for ARKWF",
      date: "Last updated on March 06, 2025 at 12:04:08",
      content: `This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our Service. It also informs you about your privacy rights and how the law protects you.`,
      icon: <PrivacyTip color="primary" />,
    },
    {
      title: "Agreement",
      content: `By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time without notice.${"\n\n"}
      We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.`,
      highlight: true,
    },
    {
      title: "Interpretation",
      content: `Words with initial capital letters have specific meanings as defined below. These definitions apply regardless of whether the terms appear in singular or plural.`,
    },
    {
      title: "Definitions",
      content: [
        {
          term: "Account",
          description:
            "A unique account created for you to access our Service.",
        },
        {
          term: "Affiliate",
          description:
            "Any entity that controls, is controlled by, or is under common control with our organization.",
        },
        {
          term: `Company (referred to as "we," "us," or "our)"`,
          description:
            "ARCHANA RAMKISHORI WELFARE FOUNDATION, C/o Sri Ram Narayan, Church Road, Pahalwara, Balrampur, Uttar Pradesh, India 271201.",
        },
        {
          term: "Cookies",
          description:
            "Small files stored on your device that track browsing activity.",
        },
        {
          term: "	Device",
          description: `Any device used to access our Service, including computers, smartphones, and tablets.`,
        },
        {
          term: "Personal Data ",
          description: `Any information relating to an identified or identifiable individual.`,
        },
        {
          term: "Service ",
          description: `Our website and related services.`,
        },
        {
          term: "Usage Data ",
          description: `Data collected automatically from your interactions with our Service.`,
        },
        {
          term: "Website",
          description: `Our official site, accessible at http://www.arkwf.org`,
        },
        {
          term: "You",
          description: `The individual using our Service or the entity they represent.`,
        },

        // ... add other definitions
      ],
      type: "definitions",
      highlight: true,
    },
    {
      title: "Types of Data Collected",
      content: [
        "Personal Data",
        "We may collect the following personally identifiable information: - Name, Phone number, Email address, Address (including state, province, ZIP/postal code, and city) and Usage data",
        "Automatically collected information may include: - Your device's IP address, Browser type and version, Pages visited and time spent on them and Unique device identifiers.",
      ],
      type: "list",
    },
    // ... (rest of your content remains the same)
  ];

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let yPos = 20;

    // Add title
    doc.setFontSize(16);
    doc.text("Terms & Conditions", 20, yPos);
    yPos += 10;

    // Add date
    doc.setFontSize(10);
    doc.text("Last updated on March 06, 2025 at 12:04:08 PM", 20, yPos);
    yPos += 20;

    // Add content
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    termsContent.forEach((section) => {
      const splitTitle = doc.splitTextToSize(section.title, 170);
      const splitContent = doc.splitTextToSize(section.content, 170);

      doc.setFont("helvetica", "bold");
      doc.text(splitTitle, 20, yPos);
      yPos += 10;

      doc.setFont("helvetica", "normal");
      doc.text(splitContent, 20, yPos);
      yPos += 20;

      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
    });

    doc.save("ARKWF-Privacy-Policy.pdf");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            mb: 6,
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${theme.palette.divider}, transparent)`,
            },
          }}
        >
          <Chip
            label="Legal Document"
            color="secondary"
            icon={<Article fontSize="small" />}
            sx={{ mb: 2 }}
          />
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 700, mx: "auto" }}
          >
            Last updated on March 06, 2025 at 12:04:08 PM
          </Typography>
          <Tooltip title="Download PDF Version">
            <IconButton
              onClick={handleDownloadPDF}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
                p: 2,
                boxShadow: 2,
              }}
              size="large"
            >
              <Download fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Content Sections */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            background: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          {termsContent.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Box
                sx={{
                  mb: 5,
                  p: 3,
                  borderRadius: 3,
                  bgcolor: section.highlight
                    ? theme.palette.primary.light + "20"
                    : "transparent",
                  borderLeft: section.highlight
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  {section.icon && (
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main + "20",
                        color: theme.palette.primary.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      {section.icon}
                    </Avatar>
                  )}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: section.highlight
                        ? theme.palette.primary.dark
                        : theme.palette.text.primary,
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>
                {section.date && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 2 }}
                  >
                    {section.date}
                  </Typography>
                )}
                <Divider sx={{ my: 2 }} />
                {section.type === "definitions" ? (
                  <Box component="dl" sx={{ mt: 2 }}>
                    {section.content.map((item, i) => (
                      <Box key={i} sx={{ mb: 2 }}>
                        <Typography
                          component="dt"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            display: "inline",
                            mr: 1,
                          }}
                        >
                          {item.term}:
                        </Typography>
                        <Typography
                          component="dd"
                          sx={{
                            color: theme.palette.text.secondary,
                            display: "inline",
                            m: 0,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : section.type === "list" ? (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      "& li": {
                        position: "relative",
                        pl: 3,
                        mb: 1.5,
                        "&::before": {
                          content: '"•"',
                          position: "absolute",
                          left: 0,
                          color: theme.palette.primary.main,
                          fontWeight: "bold",
                        },
                      },
                    }}
                  >
                    {section.content.map((item, i) => (
                      <Typography
                        component="li"
                        key={i}
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                          fontSize: "1.05rem",
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    {section.content}
                  </Typography>
                )}
              </Box>
              {index < termsContent.length - 1 && (
                <Divider
                  sx={{
                    my: 2,
                    borderStyle: "dashed",
                    borderColor: theme.palette.divider,
                  }}
                />
              )}
            </motion.div>
          ))}
        </Paper>

        {/* Floating Download Button */}
        <Box
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1000,
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={handleDownloadPDF}
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.5,
                boxShadow: 4,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Download Policy
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PrivacyPolicy;
