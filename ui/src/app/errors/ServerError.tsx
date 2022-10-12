import { Container, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError()
{
    const {state}  = useLocation();
 
    return(
        <Container component={Paper}>
            {
                state?.error ? (
                    <>
                        <Typography variant="h5" gutterBottom>Server Error</Typography>
                    </>
                ) : ''
            }
        </Container>
    )
}