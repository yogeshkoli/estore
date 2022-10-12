import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function ServerError()
{
    const {state}  = useLocation();
 
    return(
        <Container component={Paper}>
            {
                state?.error ? (
                    <>
                        <Typography variant="h5" gutterBottom>Server Error</Typography>
                        <Divider />
                        <Typography>
                            {
                                state.error.detail || 'Internal Server Error'
                            }
                        </Typography>
                    </>
                ) : <Typography variant="h5" gutterBottom>Server Error</Typography>
            }
            <Button component={Link} to="/catalog">Go back to the store</Button>
        </Container>
    )
}