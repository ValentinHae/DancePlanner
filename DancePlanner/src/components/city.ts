export class Cities{
    public cityId: number;
    public name: string;
    public altName: string;
    public country: string;
    public featureCode: string;
    public adminCode: string;
    public population: number;
    public lat: number;
    public lon: number;

    constructor(
        cityId: number,
        name: string,
        altName: string,
        country: string,
        featureCode: string,
        adminCode: string,
        population: number,
        lat: number,
        lon: number,
        ){
            this.cityId = cityId;
            this.name = name;
            this.altName = altName;
            this.country = country;
            this.featureCode = featureCode;
            this.adminCode = adminCode;
            this.adminCode = adminCode;
            this.population = population;
            this.lat = lat;
            this.lon = lon;
    };
};