import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (login(user, pass)) {
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Box sx={{ maxWidth: 300, mx: "auto", mt: 5 }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField fullWidth label="Usuario" margin="normal" value={user} onChange={e => setUser(e.target.value)} />
      <TextField fullWidth label="Contraseña" type="password" margin="normal" value={pass} onChange={e => setPass(e.target.value)} />
      <Button fullWidth variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>Entrar</Button>
    </Box>
  );
}
