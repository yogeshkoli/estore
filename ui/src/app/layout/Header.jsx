import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header()
{
    return(
        <AppBar position="static" xs={{mb: 4}}>
            <Toolbar>
                <Typography>
                    E-STORE
                </Typography>
            </Toolbar>
        </AppBar>
    );
}