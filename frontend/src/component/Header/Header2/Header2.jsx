import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useColorScheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const options = ["All Categories", "CAR", "Clothes", "Electronics"];

const Search = styled("div")(({ theme }) => ({
  flexGrow: ".5",
  position: "relative",
  borderRadius: "22px ",
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { mode, setMode } = useColorScheme();

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 1 */}
        <Stack direction={"row"} spacing={0.5} sx={{ alignItems: "center" }}>
          <ShoppingCartOutlined />
          <Typography variant="body2">E-commerce</Typography>
        </Stack>
        {/* search start */}

        <Search sx={{ display: "flex", justifyContent: "space-between" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <List
            sx={{
              bgcolor: mode === "dark" ? "#252b32" : "#f6f9fc",
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              p: 0,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            component="nav"
            aria-label="Device settings"
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{ width: 90, textAlign: "center" }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore />
            </ListItem>
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
                sx={{ fontSize: "11px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Search>

        {/* search end */}
        {/* icon */}
        <Stack direction={"row"} spacing={0.5} sx={{ alignItems: "center" }}>
          <IconButton>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
          <IconButton>
            <PersonIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Stack>
        {/* end icon */}
      </Container>
    </>
  );
}
