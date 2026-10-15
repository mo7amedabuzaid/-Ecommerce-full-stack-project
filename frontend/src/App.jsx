import Header2 from "./component/Header/Header2/Header2";
import Header1 from "./component/Header/Header1/Header1";
import Header3 from "./component/Header/Header3/Header3";
import Hero from "./component/Hero/Hero";
import { Box, useColorScheme } from "@mui/material";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import Scroll from "./component/Scroll/Scroll";

export default function App() {
  const { mode} = useColorScheme();

  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <Box sx={{ bgcolor: mode === "dark" ? "#1D2021" : "#F6F6F6" }}>
        <Hero />
        <Main />
      </Box>
      <Footer />
      <Scroll/>
    </>
  );
}
