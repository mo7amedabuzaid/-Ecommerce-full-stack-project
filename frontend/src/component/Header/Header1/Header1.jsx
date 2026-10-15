import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
const options = ["EN", "AR"];

export default function Header1() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { mode, setMode } = useColorScheme();
  function toggle() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#2b3445", py: 1,borderBottomRightRadius:"4px",borderBottomLeftRadius:"4px" }}>
        <Container sx={{width:"100%"}}>
          <Stack sx={{ alignItems: "center" }} direction={"row"}>
            {/* first logo */}
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                bgcolor: "#D23f57",
                p: "3px 10px",
                fontWeight: "bold",
                fontSize: "10px",
                borderRadius: "12px",
                mr: 2,
              }}
            >
              Hot
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Free Express Shipping
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>

            {/* first logo */}
            {/* dark mode and light */}
            <IconButton onClick={toggle}>
              {mode === "light" ? (
                <DarkModeOutlined sx={{ color: "#fff", fontSize: "24px" }} />
              ) : (
                <LightModeOutlined sx={{ color: "#fff", fontSize: "24px" }} />
              )}
            </IconButton>
            {/* dark mode and light */}
            {/* ar and en */}
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ ".MuiButtonBase-root": { padding: "0px" } }}
            >
              <ListItemButton
                  id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {
                      color: "#fff",
                      fontSize: "16px",
                      mx: 1,
                    },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMoreIcon sx={{ fontSize: "16px", color: "#fff" }} />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                },
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            {/* ar and en */}

            {/* icons */}
            <Stack direction={'row'} sx={{alignItems:"center"}}>
              <IconButton
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
              >
                <FacebookOutlinedIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              {/* icons */}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
