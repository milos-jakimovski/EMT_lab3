import { Typography, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Chip, Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useCountries } from '../hooks/useCountries';
import type { Country } from '../types/models';

export default function Countries() {
    const countries = useCountries();

    return (
        <Box sx={{ maxWidth: 800, margin: 'auto' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Supported Countries
            </Typography>

            <Paper elevation={3} sx={{ borderRadius: 2 }}>
                <List>
                    {countries.length === 0 ? (
                        <ListItem>
                            <ListItemText primary="Loading countries or no countries found..." />
                        </ListItem>
                    ) : (
                        countries.map((country: Country) => (
                            <ListItem key={country.id} divider>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                                        <PublicIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="h6">{country.name}</Typography>}
                                />
                                <Chip
                                    label={country.continent}
                                    color="primary"
                                    variant="outlined"
                                />
                            </ListItem>
                        ))
                    )}
                </List>
            </Paper>
        </Box>
    );
}