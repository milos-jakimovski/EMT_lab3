import { useState, useEffect } from 'react';
import EmtService from '../repository/emtApi';
import type { Accommodation } from '../types/models'; // <-- Notice the 'type' keyword!

export function useAccommodations() {
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

    useEffect(() => {
        EmtService.fetchAccommodations()
            .then((response) => setAccommodations(response.data))
            .catch((error) => console.error("Error fetching accommodations:", error));
    }, []);

    return accommodations;
}