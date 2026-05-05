import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Accommodation App
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/accommodations">Accommodations</Button>
                    <Button color="inherit" component={Link} to="/hosts">Hosts</Button>
                    <Button color="inherit" component={Link} to="/countries">Countries</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}