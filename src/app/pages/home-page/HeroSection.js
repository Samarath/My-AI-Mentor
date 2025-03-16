"use client";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import hero from "../../assets/hero.webp";
import ParticlesCompo from "@/components/particles/Particles";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              height: isMobile ? "300px" : "500px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: "10%",
                left: "10%",
                zIndex: 1,
                fontSize: { xs: "4rem", md: "6rem" },
                fontWeight: "bold",
                color: "rgba(255,255,255,0.1)",
              }}
            >
              AI
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "80%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background:
                        "radial-gradient(circle, rgba(66,133,244,0.3) 0%, rgba(10,25,41,0) 70%)",
                      borderRadius: "50%",
                      filter: "blur(20px)",
                    }}
                  />
                  <ParticlesCompo />
                  <Image
                    src={hero}
                    alt="AI Mentor Silhouette"
                    width={isMobile ? 250 : 600}
                    height={isMobile ? 350 : 500}
                    style={{
                      mixBlendMode: "color-burn",
                      zIndex: 2,
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              }}
            >
              Your AI Mentor
              <br />
              for Career Growth
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
                color: "text.secondary",
                maxWidth: "90%",
              }}
            >
              Empowering your career growth with personalized skill roadmaps and
              actionable milestones. Start your journey to success today.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.secondary",
                maxWidth: "90%",
              }}
            >
              With AI-driven insights, tailored guidance, and interactive
              roadmaps, we&lsquo;ll help you navigate your career path and
              unlock new opportunities. Let&lsquo;s build your future together.
            </Typography>

            <Box sx={{ display: "flex", gap: 4, mt: 6 }}>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    px: 3,
                    textTransform: "none",
                  }}
                >
                  LOGIN
                </Button>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    px: 3,
                    textTransform: "none",
                    borderColor: "primary.main",
                    color: "primary.main",
                  }}
                >
                  SIGNUP
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
