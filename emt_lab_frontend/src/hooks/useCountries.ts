import { useState, useEffect } from 'react';
import EmtService from '../repository/emtApi';
import type { Country } from '../types/models';

export function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        EmtService.fetchCountries()
            .then((response) => setCountries(response.data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    return countries;
}