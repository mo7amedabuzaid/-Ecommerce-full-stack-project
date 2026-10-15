import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
export default function Scroll() {
  return (
    <>
      <Zoom in={useScrollTrigger({ threshold: 300 }) ? true : null}>
        <Fab
        onClick={()=>{
          scrollTo(0,0)   
        }}
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          color="primary"
          size="small"
          aria-label="add"
        >
          <KeyboardArrowUp fontSize="small" />
        </Fab>
      </Zoom>
    </>
  );
}
