import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import banner15 from "../../img/banner-15.jpg";
import banner25 from "../../img/banner-25.jpg";
import banner17 from "../../img/banner-17.jpg";
import banner16 from "../../img/banner-16.jpg";
import Iconsection from "./IconSection/Iconsection";
const myitems = [
  { text: "MEN", link: banner15 },
  { text: "WOMEN", link: banner25 },
];

export default function Hero() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Box
          sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2, py: 2 }}
        >
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {myitems.map((item) => {
              return (
                <SwiperSlide key={item.text} className="img1">
                  <img src={item.link} alt="" />
                  <Box
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        textAlign: "left",
                      },
                      [theme.breakpoints.down("sm")]: {
                        pt: 4,
                        pb: 6,
                        px: 2,
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#222" }}>
                      LIFESTYLE COLLECTION
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    >
                      {item.text}
                    </Typography>
                    <Stack
                      direction={"row"}
                      spacing={{ xs: 0, sm: 1 }}
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    >
                      <Typography variant="h5" sx={{ color: "#222" }}>
                        SALE UP TO
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#D23F57" }}>
                        30% OFF
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{ color: "#000", fontWeight: "300", my: 1 }}
                    >
                      Get Free Shipping on Orders Over $99.00
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        px: 5,
                        py: 1,
                        bgcolor: "#222",
                        color: "#fff",
                        mt: 2,
                        borderRadius: 1,
                        boxShadow: "0 4px 16px rgba(43,52,69,.01)",
                        "&:hover": {
                          bgcolor: "#151515",
                          boxShadow: "0 4px 16px rgba(43,52,69,1)",
                        },
                      }}
                    >
                      SHOP NOW
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* </Box> */}

          <Box sx={{ minWidth: "26.5%", display: { xs: "none", md: "block" } }}>
            <Box sx={{ position: "relative" }}>
              <img className="imgbox" width={"100%"} src={banner17} alt="" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "30%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontSize: "18px", color: "#2B3445" }}
                >
                  NEW ARRIVALS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", color: "#2B3445", mt: "2px" }}
                >
                  SUMMER
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", color: "#2B3445" }}
                >
                  SALE 20% OFF
                </Typography>
                <Link
                  href="#"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      color: "#D23F57",
                    },
                    cursor: "pointer",
                  }}
                  underline="none"
                >
                  SHOP NOW
                  <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            </Box>

            <Box sx={{ width: "100%", position: "relative" }}>
              <img className="imgbox" width={"100%"} src={banner16} alt="" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "20%",
                  transform: "translateY('-50%')",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontSize: "18px", color: "#2B3445" }}
                >
                  GAMMING 4K
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", color: "#2B3445", mt: "2px" }}
                >
                  DESKTOPS & LAPTOPS
                </Typography>
                <Link
                  href="#"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      color: "#D23F57",
                    },
                    cursor: "pointer",
                  }}
                  underline="none"
                >
                  SHOP NOW
                  <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Iconsection />
      </Container>
    </>
  );
}
