import { useState, useEffect } from 'react';
import EmtService from '../repository/emtApi';
import type { Host } from '../types/models';

export function useHosts() {
    const [hosts, setHosts] = useState<Host[]>([]);

    useEffect(() => {
        EmtService.fetchHosts()
            .then((response) => setHosts(response.data))
            .catch((error) => console.error("Error fetching hosts:", error));
    }, []);

    return hosts;
}