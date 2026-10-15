import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Links({ title }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          "&:hover .show": { display: "block" },
          "&:hover": { cursor: "pointer" },
          zIndex: 999,
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore sx={{ fontSize: "16px", ml: "1" }} />
        <Box
          className="show"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "100%",
            minWidth: "170px",
            display: "none",
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                {/* 1 */}
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "400",
                        },
                      }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>

                {/* 2 */}
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      p: 0,
                      px: 1.5,
                      display: "flex",
                      position: "relative",
                      "&:hover .prodshow": { display: "block" },
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "400",
                        },
                      }}
                      primary="Products"
                    />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
                    <Box
                      className="prodshow"
                      sx={{
                        position: "absolute",
                        left: "100%",
                        top: 0,
                        minWidth: "150px",
                        display: "none",
                      }}
                    >
                      <Paper sx={{ ml: 1 }}>
                        <nav aria-label="secondary mailbox folders">
                          <List>
                            <ListItem disablePadding>
                              <ListItemButton sx={{ p: 0, px: 1.5 }}>
                                <ListItemText
                                  sx={{
                                    ".MuiTypography-root": {
                                      fontSize: "14px",
                                      fontWeight: "400",
                                    },
                                  }}
                                  primary="Add product"
                                />
                              </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                              <ListItemButton sx={{ p: 0, px: 1.5 }}>
                                <ListItemText
                                  sx={{
                                    ".MuiTypography-root": {
                                      fontSize: "14px",
                                      fontWeight: "400",
                                    },
                                  }}
                                  primary=" Edit product"
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                      </Paper>
                    </Box>
                  </ListItemButton>
                </ListItem>

                {/* 3 */}
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "400",
                        },
                      }}
                      primary="Order"
                    />
                  </ListItemButton>
                </ListItem>
                {/* 4 */}
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "400",
                        },
                      }}
                      primary="Profile"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
