import { Container, Paper, Divider, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound()
{
    return(
        <Container component={Paper} sx={{height: 400}}>
            <Typography variant="h5" gutterBottom color='error'>
                Oops - we could not find what you are looking for
            </Typography>
            <Divider />

            <Button fullWidth component={Link} to="/catalog">Go back to the store</Button>
        </Container>

    )
}