import { Typography, Grid, Card, CardContent, CardHeader, Avatar, Divider, Box } from '@mui/material';
import { useHosts } from '../hooks/useHosts';
import type { Host } from '../types/models';

export default function Hosts() {
    const hosts = useHosts();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Our Registered Hosts
            </Typography>

            {hosts.length === 0 ? (
                <Typography variant="body1">Loading hosts or no hosts found...</Typography>
            ) : (
                <Grid container spacing={4}>
                    {hosts.map((host: Host) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={host.id}>
                            <Card elevation={3} sx={{ borderRadius: 2, height: '100%' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                                            {host.name.charAt(0)}{host.surname.charAt(0)}
                                        </Avatar>
                                    }
                                    title={<Typography variant="h6">{host.name} {host.surname}</Typography>}
                                    subheader={`Host ID: #${host.id}`}
                                />
                                <Divider />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">
                                        <strong>Location:</strong> {host.countryName}
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