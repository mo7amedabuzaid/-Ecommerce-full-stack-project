import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";
import React, { useId, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CloseOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

export default function Header3() {
  const { mode, setMode } = useColorScheme();

  const theme = useTheme();
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "13.75rem",
            bgcolor: mode === "dark" ? "#252b32" : "#f6f9fc",
            color: theme.palette.text.secondary,
          }}
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleClick}
        >
          <WindowIcon />
          <Typography
            variant="body1"
            sx={{ p: 0, textTransform: "capitalize", mx: 1 }}
          >
            Categories
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <ArrowForwardIosIcon />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              bgcolor: mode === "dark" ? "#252b32" : "#f6f9fc",
              color: theme.palette.text.secondary,
            },
          }}
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": buttonId,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
        {useMediaQuery("(min-width:1200px)") && (
          <Stack direction={"row"} sx={{ alignItems: "center", gap: 4 }}>
            <Links title={"Home"} />
            <Links title={"Mega Menue"} />
            <Links title={"Full Screen Menue"} />
            <Links title={"Pages"} />
            <Links title={"User Account"} />
            <Links title={"Vendor Account"} />
          </Stack>
        )}
        {useMediaQuery("(max-width:1200px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <SwipeableDrawer
          sx={{
            ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
            },
          }}
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
        >
          <Box
            sx={{
              width: "444px",
              mx: "auto",
              mt: 6,
              position: "relative",
              pt: 10,
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                ":hover": { rotate: "180deg", transition: ".3s", color: "red" },
              }}
            >
              <CloseOutlined />
            </IconButton>

            {[
              { mainText: "Home", subText: ["link1", "link2", "link3"] },
              { mainText: "Mega menue", subText: ["link1", "link2", "link3"] },
              {
                mainText: "Full screen menu",
                subText: ["link1", "link2", "link3"],
              },
              { mainText: "Pages", subText: ["link1", "link2", "link3"] },
              {
                mainText: "User account",
                subText: ["link1", "link2", "link3"],
              },
              {
                mainText: "Vendor account",
                subText: ["link1", "link2", "link3"],
              },
            ].map((item) => {
              return (
                <Accordion
                  elevation={0}
                  key={item.mainText}
                  sx={{ bgcolor: "initial", mt: 2 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                  >
                    <Typography sx={{ ml: 1 }} component="span">
                      {item.mainText}
                    </Typography>
                  </AccordionSummary>

                  {item.subText.map((factor) => {
                    return (
                      <List sx={{ py: 0, my: 0 }} key={factor}>
                        <ListItem sx={{ py: 0, my: 0 }}>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary={factor} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    );
                  })}
                </Accordion>
              );
            })}
          </Box>
        </SwipeableDrawer>
      </Container>
    </>
  );
}
