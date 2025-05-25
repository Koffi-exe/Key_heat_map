import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import  useStore  from "../store/store.js";

const Navbar = () => {

  const {name, email, image, setName, setEmail, setImage} = useStore()

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(res.data.picture);
        setEmail(res.data.email)
        setImage(res.data.picture)
        setName(res.data.name)
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Keyboard Heat Map
          </Typography>
          <Button onClick={handleLogin} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
