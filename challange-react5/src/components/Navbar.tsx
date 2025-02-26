import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useSignout } from "../hooks/useSignout";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { signout } = useSignout();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{ minHeight: "110px", justifyContent: "space-between" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to={"/all-workouts"} style={{ color: "white" }}>
                <i className="fas fa-dumbbell"></i>
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", cursor: "pointer" }}
            >
              <Link to={"/add-new-workout"} style={{ color: "white" }}>
                <i className="fas fa-plus"></i>
              </Link>
            </Typography>
            <Button color="inherit" onClick={signout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
