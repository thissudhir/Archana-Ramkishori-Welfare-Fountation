import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  useTheme,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

const TermAndConditions = () => {
  const theme = useTheme();

  const termsContent = [
    {
      title: "Terms & Conditions",
      date: "Last updated on 02-06-2025 12:04:08",
      content: `These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding
agreement by and between ARCHANA RAMKISHORI WELFARE FOUNDATION, ( “Website
Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods
(as applicable) or services (as applicable) (collectively, “Services”).`,
    },
    {
      title: "Agreement",
      content: `By using our website and availing the Services, you agree that you have read and accepted these Terms
(including the Privacy Policy). We reserve the right to modify these Terms at any time and without
assigning any reason. It is your responsibility to periodically review these Terms to stay informed of
updates.`,
    },
    {
      title: "Eligibility",
      content: `The use of this website or availing of our Services is subject to the following terms of use:`,
    },
    {
      title: "1.1",
      content: `To access and use the Services, you agree to provide true, accurate and complete information to us
during and after registration, and you shall be responsible for all acts done through the use of your
registered account.`,
    },
    {
      title: "1.2",
      content: `Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
performance, completeness or suitability of the information and materials offered on this website
or through the Services, for any specific purpose. You acknowledge that such information and
materials may contain inaccuracies or errors and we expressly exclude liability for any such
inaccuracies or errors to the fullest extent permitted by law.`,
    },
    {
      title: "1.3",
      content: `Your use of our Services and the websites solely at your own risk and discretion.. You are
required to independently assess and ensure that the Services meet your requirements..`,
    },
    {
      title: "1.4",
      content: `The contents of the Website and the Services are proprietary to Us and you will not have any
authority to claim any intellectual property rights, title, or interest in its contents.`,
    },
    {
      title: "1.5",
      content: `You acknowledge that unauthorized use of the Website or the Services may lead to action against
you as per these Terms or applicable laws.`,
    },
    {
      title: "1.6",
      content: `You agree to pay us the charges associated with availing the Services.`,
    },
    {
      title: "1.7",
      content: `You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or
forbidden by these Terms, or Indian or local laws that might apply to you.`,
    },
    {
      title: "1.8",
      content: `You agree and acknowledge that website and the Services may contain links to other third party
websites. On accessing these links, you will be governed by the terms of use, privacy policy and
such other policies of such third party websites.`,
    },
    {
      title: "1.9",
      content: `You understand that upon initiating a transaction for availing the Services you are entering into a
legally binding and enforceable contract with the us for the Services.`,
    },
    {
      title: "1.10",
      content: `You shall be entitled to claim a refund of the payment made by you in case we are not able to
provide the Service. The timelines for such return and refund will be according to the specific
Service you have availed or within the time period provided in our policies (as applicable). In case
you do not raise a refund claim within the stipulated time, than this would make you ineligible for
a refund.`,
    },
    {
      title: "1.11",
      content: `Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to
perform an obligation under these Terms if performance is prevented or delayed by a force majeure
event.`,
    },
    {
      title: "1.12",
      content: `These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and
construed in accordance with the laws of India.`,
    },
    {
      title: "1.13",
      content: `All disputes arising out of or in connection with these Terms shall be subject to the exclusive
jurisdiction of the courts in Balrampur, Uttar Pradesh.`,
    },
    {
      title: "1.14",
      content: `All concerns or communications relating to these Terms must be communicated to us using the
contact information provided on this website.`,
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
    doc.text("Last updated on 02-06-2025 12:04:08", 20, yPos);
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
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Terms & Conditions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Last updated on 02-06-2025 12:04:08
          </Typography>
          <Button
            variant="contained"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              // background: theme.palette.primary.main,
              // "&:hover": {
              //   background: theme.palette.primary.dark,
              // },
            }}
          >
            Download PDF
          </Button>
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
          }}
        >
          {termsContent.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </Typography>
            </Box>
          ))}
        </Paper>
      </motion.div>
    </Container>
  );
};

export default TermAndConditions;
