import react from "react";
import Registration1 from "../../Inc/Registration/Registration1";
import Footer from "../../Inc/Footer";
import RegCards from "../../Inc/Registration/RegCards";
import { Container, Stack } from "@mui/system";
import Instructions from "../../Inc/Registration/Instructions";



const RegSelction = () => {
  return (
    <div style={{backgroundColor:"#F3F3FE"}}>
    <Stack gap="5">
        <Registration1/>
        <Instructions/>
        <RegCards />
        <Footer />
    </Stack>
    </div>
    
  );
};

export default RegSelction;
