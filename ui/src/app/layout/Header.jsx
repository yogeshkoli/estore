import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean,
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props)
{
    return(
        <AppBar position="static" xs={{mb: 4}}>
            <Toolbar>
                <Typography>  
                    E-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    );
}