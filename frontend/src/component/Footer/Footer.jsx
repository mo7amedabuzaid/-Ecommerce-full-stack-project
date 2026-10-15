import { Box, Button, Typography } from '@mui/material'

export default function Footer() {
  return (
    <>
    <Box sx={{bgcolor:"#2b3445",py:1.5,borderTopRightRadius:8,borderTopLeftRadius:8,}}>
        <Typography variant='h6' sx={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>
            Designed and developed by  
            <Button variant='text' sx={{color:"#ff7790",mx:.5,fontSize:"18px",textTransform:"capitalize"}}>
Mohamed Abu Zaid
</Button>
@2026
        </Typography>

    </Box>
    
    </>
  )
}
