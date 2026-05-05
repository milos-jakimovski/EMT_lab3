import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Box,
    Chip,
    Avatar
} from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork'; // A nice house icon
import { useAccommodations } from '../hooks/useAccommodations';
import type { Accommodation } from '../types/models';

export default function Accommodations() {
    const accommodations = useAccommodations();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Available Accommodations
            </Typography>

            {accommodations.length === 0 ? (
                <Typography variant="body1">Loading accommodations or none found...</Typography>
            ) : (
                <Grid container spacing={4}>
                    {accommodations.map((acc: Accommodation) => (
                        // Using the new Material UI v6 Grid syntax here
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={acc.id}>
                            <Card elevation={3} sx={{ borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'info.main' }}>
                                            <HomeWorkIcon />
                                        </Avatar>
                                    }
                                    title={<Typography variant="h6">{acc.name}</Typography>}
                                    subheader={acc.category}
                                    action={
                                        <Chip
                                            label={acc.booked ? "Booked" : "Available"}
                                            color={acc.booked ? "error" : "success"}
                                            size="small"
                                            sx={{ mt: 1, mr: 1 }}
                                        />
                                    }
                                />
                                <Divider />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        <strong>Rooms:</strong> {acc.numRooms}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        <strong>Condition:</strong> {acc.state}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Host ID:</strong> #{acc.hostId}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}