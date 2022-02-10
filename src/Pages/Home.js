import { Typography } from "@mui/material";
import CarouselSlide from "../Components/CarouselSlide";
import Box from "@mui/material/Box";
const Home = () => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        sx={{ mt: 4, ml: 2 }}
      >
        Welcome to
      </Typography>
      <Typography variant="h5" component="div" sx={{ mt: 1, ml: 2 }}>
        Sev, Taylor, and Ki Sub's playApp
      </Typography>
      <Typography variant="h6" sx={{background:"skyBlue", width:220, display:"flex", justifyContent:"center", mt:5}}>Anywhere, any music!</Typography>
      <CarouselSlide />
    </Box>
  );
};

export default Home;
