export interface DanceEvents{
    id: String,
    title: String,
    dances: String,
    startDate: String,
    city: String,
    countryCode: String,
    lat: Number,
    lon: Number,
    street: String,
    housenumber: String,
    startTime: String,
    link: String,
    chatLink: String
};

export class DanceEvent{
    // Attributes
    public id: String;
    public title: String;
    public dances: String;
    public startDate: String;
    public city: String;
    public countryCode: String;
    public lat: Number;
    public lon: Number;
    public street: String;
    public housenumber: String;
    public startTime: String;
    public link: String;
    public chatLink: String;

    // Constructur
    constructor(
        id: String, 
        title: String, 
        dances: String, 
        startDate: String, 
        city: String,
        countryCode: String,
        lat: Number,
        lon: Number,
        street: String,
        housenumber: String,
        startTime: String,
        link: String,
        chatLink: String
        ){
            this.id = id;
            this.title = title;
            this.dances = dances;
            this.startDate = startDate;
            this.city = city;
            this.countryCode = countryCode;
            this.lat = lat;
            this.lon = lon;
            this.street = street;
            this.housenumber = housenumber;
            this.startTime = startTime;
            this.link = link;
            this.chatLink = chatLink;
    };
}