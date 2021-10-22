const adapters = [
    {
        name: "input Handler",
        configuration: "./data/config/inputHandler.yml"

    },
    {
        name:"key Finder",
        configuration: "./data/config/keyFinder.yml" 
    },
    
    {
        name: "data Enricher",
        configuration:"./data/config/dataEnricher.yml"
    },
    {
        name: "filter Clients",
        configuration:"./data/config/filterClients.yml"
    },
];

export default adapters;