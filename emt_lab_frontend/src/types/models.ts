export interface Accommodation {
    id: number;
    name: string;
    category: string;
    hostId: number;
    state: string;
    numRooms: number;
    booked: boolean;
}

export interface Host {
    id: number;
    name: string;
    surname: string;
    countryName: string; // This matches the 4th String parameter we just added to your Spring Boot DTO!
}

export interface Country {
    id: number;
    name: string;
    continent: string;
}