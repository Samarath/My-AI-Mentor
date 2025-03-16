"use client";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

export default function Footer() {
  const navItems = ["Home", "News", "About", "Contact Us", "Our Team"];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          {[
            { icon: <FacebookIcon />, label: "Facebook" },
            { icon: <InstagramIcon />, label: "Instagram" },
            { icon: <TwitterIcon />, label: "Twitter" },
            { icon: <GoogleIcon />, label: "Google" },
            { icon: <YouTubeIcon />, label: "YouTube" },
          ].map((social) => (
            <IconButton
              key={social.label}
              aria-label={social.label}
              sx={{
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                },
                width: 40,
                height: 40,
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              underline="hover"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
                fontSize: "0.9rem",
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Copyright ©2025
        </Typography>
      </Container>
    </Box>
  );
}
