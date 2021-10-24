const adapters = [
  {
    id: 0,
    name: "Input Handler",
    configuration: "./data/config/inputHandler.yml"

  },
  {
    id: 1,
    name: "Key Finder",
    configuration: "./data/config/keyFinder.yml"
  },

  {
    id: 2,
    name: "Data Enricher",
    configuration: "./data/config/dataEnricher.yml"
  },
  {
    id: 3,
    name: "Filter Clients",
    configuration: "./data/config/filterClients.yml"
  },
  {
    id: 4,
    name: "Calculate Models",
    configuration: "./data/config/calculateModels.yml"
  },
  {
    id: 5,
    name: "Evaluate Conditions",
    configuration: "./data/config/evaluateConditions.yml"
  },
  {
    id: 6,
    name: "Output Handler",
    configuration: "./data/config/outputHandler.yml"
  },
];

export default adapters;