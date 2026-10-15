// @ts-nocheck
import {
  Box,
  Container,
  duration,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ProductDetails from "./ProductDetails";
import { CircleOutlined, CloseOutlined } from "@mui/icons-material";

import { useGetProductByNameQuery } from "../../Redux/Product";
import { motion } from "framer-motion";
export default function Main() {
  const theme = useTheme();
  const handleAlignment = (event,newAlignment) => {
    if (newAlignment != null) {
      setdisplayData(newAlignment);
    }
    
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const [productclick, setproductclick] = useState(null)
  const isMobile = useMediaQuery("(max-width:600px)");
  const allData = "products?populate=*";
  const menData = "products?populate=*&filters[productCategroy][$eq]=men";
  const woMenData = "products?populate=*&filters[productCategroy][$eq]=women";
  const [displayData, setdisplayData] = useState(allData);
  const { data, error, isLoading } = useGetProductByNameQuery(displayData);
  if (error) {
    console.log(error);
    
    return (
      <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        mt: 5,
        color: "red",
      }}
      >
        Something went wrong: {error?.error || "Failed to fetch products"}
      </Typography>
    );
  }
  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", py: 11 }}>
        <CircleOutlined fontSize="25px" />
      </Box>
    );
  }
  if (data) {
    return (
      <>
        <Container sx={{ py: 5 }}>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h6">Seleted Products</Typography>
              <Typography sx={{ fontWeight: "300" }} variant="body1">
                All our new arrivals in a exclusive brand selection
              </Typography>
            </Box>
            <Stack>
              <ToggleButtonGroup
                sx={{
                  ".Mui-selected": {
                    backgroundColor: "initial !important",
                    border: "1px solid rgba(233,69,96,.5) !important",
                    color: "#e94560 !important",
                  },
                  ".MuiButtonBase-root:hover": {
                    backgroundColor: " rgba(233,69,96,.5) !important",
                  },
                }}
                value={displayData}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  sx={{ color: theme.palette.text.primary }}
                  className="myButton"
                  color="error"
                  value={allData}
                  aria-label="left aligned"
                >
                  All Products
                </ToggleButton>
                <ToggleButton
                  className="myButton"
                  sx={{
                    mx: "8px !important",
                    color: theme.palette.text.primary,
                  }}
                  color="error"
                  value={menData}
                  aria-label="centered"
                >
                  MEN Products
                </ToggleButton>
                <ToggleButton
                  sx={{ color: theme.palette.text.primary }}
                  className="myButton"
                  color="error"
                  value={woMenData}
                  aria-label="right aligned"
                >
                  WoMEN Products
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <Stack
              sx={{
                flexWrap: "wrap",
                flexGrow:1,
                gap: 2,
                justifyContent: isMobile ? "Center" : "space-between",
              }}
              direction={"row"}
            >
              {data?.data?.map((item) => {
                return (
                  <Card
                  component={motion.section}
                          layout
        initial={{ transform: "scale(0)" }}
        transition={{duration:.5}}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}

                    key={item.id}
                    sx={{
                      maxWidth: 333,
                      mt: 9,
                      "&:hover .MuiCardMedia-root": {
                        scale: 1.1,
                        rotate: "deg",
                      },
                      transition: ".35s",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 277 }}
                      image={`${import.meta.env.VITE_BASE_URL}${item.productimg[0].url}`}
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack
                        direction={"row"}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {item.productTitle}
                        </Typography>

                        <Typography
                          variant="subtitle1"
                          sx={{ color: "text.secondary" }}
                        >
                          ${item.productPrice}
                        </Typography>
                      </Stack>
                      {item.productDescription}
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button 
                     onClick={() => {
  setproductclick(item);
  handleClickOpen();
}}
                      size="small">
                        <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                        Add To Cart
                      </Button>
                      <Button size="small">
                        <Rating
                          name="read-only"
                          value={item.productRating}
                          readOnly
                        />
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Stack>
          </Stack>
        </Container>

        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: "60%" },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          role="alertdialog"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "180deg", transition: ".3s", color: "red" },
            }}
          >
            <CloseOutlined />
          </IconButton>
          <ProductDetails productclick={productclick}  />
        </Dialog>
      </>
    );
  }
}
