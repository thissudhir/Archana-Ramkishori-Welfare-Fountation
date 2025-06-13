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
  useMediaQuery,
} from "@mui/material";
import { Download, Gavel, Article } from "@mui/icons-material";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

const TermAndConditions = () => {
  const theme = useTheme();

  const termsContent = [
    {
      title: "Terms & Conditions",
      date: "Last updated on March 06, 2025 at 12:04:08 PM",
      content: `These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding
agreement by and between ARCHANA RAMKISHORI WELFARE FOUNDATION, ( “Website
Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods
(as applicable) or services (as applicable) (collectively, “Services”).`,
      icon: <Gavel color="primary" />,
    },
    {
      title: "Agreement",
      content: `By using our website and availing the Services, you agree that you have read and accepted these Terms
(including the Privacy Policy). We reserve the right to modify these Terms at any time and without
assigning any reason. It is your responsibility to periodically review these Terms to stay informed of
updates.`,
      highlight: true,
    },
    {
      title: "Eligibility",
      content: `The use of this website or availing of our Services is subject to the following terms of use:`,
      highlight: true,
    },
    {
      title: "1.1",
      content: `To access and use the Services, you agree to provide true, accurate and complete information to us
during and after registration, and you shall be responsible for all acts done through the use of your
registered account.`,
      highlight: true,
    },
    {
      title: "1.2",
      content: `Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
performance, completeness or suitability of the information and materials offered on this website
or through the Services, for any specific purpose. You acknowledge that such information and
materials may contain inaccuracies or errors and we expressly exclude liability for any such
inaccuracies or errors to the fullest extent permitted by law.`,
      highlight: true,
    },
    {
      title: "1.3",
      content: `Your use of our Services and the websites solely at your own risk and discretion.. You are
required to independently assess and ensure that the Services meet your requirements..`,
      highlight: true,
    },
    {
      title: "1.4",
      content: `The contents of the Website and the Services are proprietary to Us and you will not have any
authority to claim any intellectual property rights, title, or interest in its contents.`,
      highlight: true,
    },
    {
      title: "1.5",
      content: `You acknowledge that unauthorized use of the Website or the Services may lead to action against
you as per these Terms or applicable laws.`,
      highlight: true,
    },
    {
      title: "1.6",
      content: `You agree to pay us the charges associated with availing the Services.`,
      highlight: true,
    },
    {
      title: "1.7",
      content: `You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or
forbidden by these Terms, or Indian or local laws that might apply to you.`,
      highlight: true,
    },
    {
      title: "1.8",
      content: `You agree and acknowledge that website and the Services may contain links to other third party
websites. On accessing these links, you will be governed by the terms of use, privacy policy and
such other policies of such third party websites.`,
      highlight: true,
    },
    {
      title: "1.9",
      content: `You understand that upon initiating a transaction for availing the Services you are entering into a
legally binding and enforceable contract with the us for the Services.`,
      highlight: true,
    },
    {
      title: "1.10",
      content: `You shall be entitled to claim a refund of the payment made by you in case we are not able to
provide the Service. The timelines for such return and refund will be according to the specific
Service you have availed or within the time period provided in our policies (as applicable). In case
you do not raise a refund claim within the stipulated time, than this would make you ineligible for
a refund.`,
      highlight: true,
    },
    {
      title: "1.11",
      content: `Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to
perform an obligation under these Terms if performance is prevented or delayed by a force majeure
event.`,
      highlight: true,
    },
    {
      title: "1.12",
      content: `These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and
construed in accordance with the laws of India.`,
      highlight: true,
    },
    {
      title: "1.13",
      content: `All disputes arising out of or in connection with these Terms shall be subject to the exclusive
jurisdiction of the courts in Balrampur, Uttar Pradesh.`,
      highlight: true,
    },
    {
      title: "1.14",
      content: `All concerns or communications relating to these Terms must be communicated to us using the
contact information provided on this website.`,
      highlight: true,
    },
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

    doc.save("ARKWF-Terms-and-Conditions.pdf");
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
            sx={{ mb: 3, px: 2, py: 1 }}
          />
          <Typography
            variant={"h3"}
            gutterBottom
            sx={{
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Terms & Conditions
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Last updated on March 06, 2025 at 12:04:08 PM
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={handleDownloadPDF}
              size="large"
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              Download Full Document
            </Button>
          </motion.div>
        </Box>

        {/* Content Sections */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {termsContent.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Box
                sx={{
                  mb: 5,
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  bgcolor: section.highlight
                    ? theme.palette.primary.light + "15"
                    : "transparent",
                  borderLeft: section.highlight
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: section.highlight ? 2 : 1,
                  },
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
                        bgcolor: theme.palette.primary.main + "15",
                        color: theme.palette.primary.main,
                        width: 44,
                        height: 44,
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
                      fontSize: { xs: "1.3rem", md: "1.5rem" },
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>
                {section.date && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 2, fontStyle: "italic" }}
                  >
                    {section.date}
                  </Typography>
                )}
                <Divider
                  sx={{
                    my: 2,
                    borderColor: theme.palette.divider,
                    opacity: 0.5,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                  }}
                >
                  {section.content}
                </Typography>
              </Box>
              {index < termsContent.length - 1 && (
                <Divider
                  sx={{
                    my: 2,
                    borderStyle: "dotted",
                    borderColor: theme.palette.divider,
                  }}
                />
              )}
            </motion.div>
          ))}
        </Paper>

        {/* Floating Action Button */}

        <Box
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1000,
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Tooltip title="Download PDF" arrow>
              <IconButton
                onClick={handleDownloadPDF}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  p: 2.5,
                  boxShadow: 4,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
                size="large"
              >
                <Download fontSize="large" />
              </IconButton>
            </Tooltip>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default TermAndConditions;
