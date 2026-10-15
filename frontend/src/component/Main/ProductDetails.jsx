import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function ProductDetails({ productclick }) {
  const [displayimg, setdisplayimg] = useState(0);
  const [alignment, setAlignment] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: "400px",
            textAlign: { xs: "center", md: "left", display: "flex" },
          }}
        >
          <img
            width={"100%"}
            src={`${import.meta.env.VITE_BASE_URL}${productclick.productimg[displayimg].url}`}
            alt=""
          />
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}>
          <Typography variant="h5">{productclick.productTitle}</Typography>
          <Typography
            sx={{ my: 0.5, fontSize: "22px" }}
            color="error"
            variant="h5"
          >
            ${productclick.productPrice}
          </Typography>
          <Typography
            sx={{ textAlign: { xs: "center", md: "left" } }}
            variant="body1"
          >
            {productclick.productDescription}
          </Typography>
          <Stack
            sx={{
              mt: 3,
              gap: 0.9,
              justifyContent: { xs: "center", md: "left" },
            }}
            direction={"row"}
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
               sx={{
                  ".Mui-selected": {
                    opacity:"1"
                  }}}
            >
              {productclick.productimg.map((img, index) => {
                return (
                  <ToggleButton
                    sx={{ padding: 0, width: "110px", height: "110px", mx: 1 ,opacity:.5}}
                    key={img.id}
                    value={index}
                    aria-label="left aligned"
                  >
                    <img
                      width={"100%"}
                      height={"100%"}
                      onClick={() => {
                        setdisplayimg(index);
                      }}
                      style={{ borderRadius: "3px" }}
                      src={`${import.meta.env.VITE_BASE_URL}${img.url}`}
                      alt=""
                    />
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </Stack>
          <Button
            sx={{ textAlign: "center", mt: 2, mb: { xs: 1 } }}
            variant="contained"
          >
            <AddShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} />
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
}
