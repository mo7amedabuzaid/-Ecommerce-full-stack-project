import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
export default function Iconsection() {
  const { mode } = useColorScheme();

  return (
    <>
      <Container
        sx={{
          mt: 1,
          bgcolor: mode === "dark" ? "#000" : "#fff",
        }}
      >
        <Stack
          direction={"row"}
          divider={
            useMediaQuery("(min-width:600px)") ? (
              <Divider orientation="vertical" flexItem />
            ) : null
          }
          sx={{
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <MyBox
            icon={<ElectricBoltIcon fontSize="large" />}
            title={"Fast Delivery"}
            subTitle={" Start from 10$"}
          />
          <MyBox
            icon={<CreditScoreOutlinedIcon fontSize="large" />}
            title={"Money Guarantee"}
            subTitle={"7 Days Back"}
          />
          <MyBox
            icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
            title={"365 Days"}
            subTitle={"For Free Return"}
          />
          <MyBox
            icon={<AccessAlarmOutlinedIcon fontSize="large" />}
            title={"Payment"}
            subTitle={"Secure System"}
          />
        </Stack>
      </Container>
    </>
  );
}

function MyBox({ icon, title, subTitle }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 250px",
          alignItems: "center",
          justifyContent: useMediaQuery("(max-width:600px)")
            ? "left"
            : "center",
          gap: 3,
          py: 1.6,
        }}
      >
        {icon}
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
