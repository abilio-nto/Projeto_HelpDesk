import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import './style.css'
import React from "react"

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Abílio Neto
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export const Login = () => {
    return (


        <Container component="main" maxWidth="xs" className="box-login" sx={{ p: 2, mt: 8 }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "center"


                }}
            >



                <Avatar
                    src="https://www.pinclipart.com/picdir/big/354-3546720_his-2013-helpdesk-support-2x-references-icon-png.png"
                    sx={{ width: 100, height: 100, bgcolor: '#fff' }}>
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                    Help Desk Login
                </Typography>


                <Box component="form" noValidate sx={{ mt: 1 }} >


                    <TextField
                        margin="normal"
                        type="text"
                        fullWidth
                        id="email"
                        label="Email*"
                        name="email"
                        className="input-config"
                    />
                    <TextField
                        margin="normal"
                        type="password"
                        fullWidth
                        id="senha"
                        label="Senha*"
                        name="senha"
                        className="input-config"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Logar</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Não tem Conta? Crie Aqui!
                            </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </Box>
        </Container>
    )
}