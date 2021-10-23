const adapters = [
  {
    id: 0,
    name: "input Handler",
    configuration: "./data/config/inputHandler.yml"

  },
  {
    id: 1,
    name: "key Finder",
    configuration: "./data/config/keyFinder.yml"
  },

  {
    id: 2,
    name: "data Enricher",
    configuration: "./data/config/dataEnricher.yml"
  },
  {
    id: 3,
    name: "filter Clients",
    configuration: "./data/config/filterClients.yml"
  },
  {
    id: 4,
    name: "calculate Models",
    configuration: "./data/config/calculateModels.yml"
  },
  {
    id: 5,
    name: "evaluate Conditions",
    configuration: "./data/config/evaluateConditions.yml"
  },
  {
    id: 6,
    name: "output Handler",
    configuration: "./data/config/outputHandler.yml"
  },
];

export default adapters;