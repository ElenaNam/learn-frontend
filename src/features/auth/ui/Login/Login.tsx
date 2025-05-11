import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import { useAuth } from "../../model/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleAuth } = useAuth();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit");
    handleAuth(email, password);
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Вход
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //error={!!errors.email}
            //helperText={errors.email}
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //error={!!errors.password}
            //helperText={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
