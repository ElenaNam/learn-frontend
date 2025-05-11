import { selectIsLoggedIn, selectThemeMode, setIsLoggedInAC } from "@/app/app-slice";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { containerSx } from "@/common/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
//   IconButton,
} from "@mui/material";
//import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "@/shared/api/firebase";
import { getTheme } from "@/common/theme";
import { NavLink } from "react-router";
import { Path } from "@/common/routing";

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(selectThemeMode)

  const theme = getTheme(themeMode)

  const logoutHandler = async () => {
    await logout();
    dispatch(setIsLoggedInAC({ isLoggedIn: false }));
  };

  return (
    <AppBar position="static" sx={{ mb: "30px", background: theme.palette.primary.dark}}>
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
            <NavLink to={Path.Main} style={{fontWeight: 'bold'}}>Learn Frontend</NavLink>
          {/* <IconButton color="inherit">
            <MenuIcon />
          </IconButton> */}
          <div>
            {isLoggedIn && <Button variant="contained" onClick={logoutHandler}>Sign out</Button>}
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
