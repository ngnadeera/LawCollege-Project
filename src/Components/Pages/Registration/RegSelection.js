import react from "react";
import Registration1 from "../../Inc/Registration/Registration1";
import Footer from "../../Inc/Footer";
import RegCards from "../../Inc/Registration/RegCards";
import { Stack } from "@mui/system";



const RegSelction = () => {
  return (
    
    <Stack gap="5">
        <Registration1/>
        <RegCards />
        <Footer />
    </Stack>
    
  );
};

export default RegSelction;
