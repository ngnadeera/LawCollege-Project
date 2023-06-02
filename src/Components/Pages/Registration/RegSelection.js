import react from "react";
import Registration1 from "../../Inc/Registration/Registration1";
import Footer from "../../Inc/Footer";
import RegCards from "../../Inc/Registration/RegCards";
import { Stack } from "@mui/system";



const RegSelction = () => {
  return (
    <div style={{backgroundColor:"#F3F3FE"}}>
    <Stack gap="5">
        <Registration1/>
        <RegCards />
        <Footer />
    </Stack>
    </div>
    
  );
};

export default RegSelction;
