import axios from './custom-axios';

const EmtService = {
    fetchAccommodations: () => {
        return axios.get("/accommodations");
    },
    fetchAccommodationById: (id: number) => {
        return axios.get(`/accommodations/${id}`);
    },
    fetchHosts: () => {
        return axios.get("/hosts");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    }
};

export default EmtService;