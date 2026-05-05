import { Outlet } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <CssBaseline /> {/* Normalizes CSS across browsers */}
            <Header />
            {/* The Container gives our pages some nice padding and limits width */}
            <Container sx={{ mt: 4 }}>
                <Outlet />
            </Container>
        </>
    );
}