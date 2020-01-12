const map = require('../../../../../static/unstructured-data/homelessness-analysis/2019_coc_grantee_areas_v2');
const cfdaStateData = require('../../../../../static/unstructured-data/homelessness-analysis/2019statecfdafunding.csv');
const barChart = require('../../../../../static/unstructured-data/homelessness-analysis/2019CoCCFDAfunding_v3.csv');
const stateList = require('../../../../../static/unstructured-data/homelessness-analysis/State_crosswalk.csv');
const acronyms = require('../../../../../static/unstructured-data/homelessness-analysis/cfda_acronyms.csv');
const cocPopulation = require('../../../../../static/unstructured-data/homelessness-analysis/panel_2_table_and_counts_v6.csv');

const treeData = require('../../../../../static/unstructured-data/homelessness-analysis/homeless_cluster_v3');
const cluster = require('../../../../../static/unstructured-data/homelessness-analysis/cluster_data_panel_3_v2.csv');
const infographicData = require('../../../../../static/unstructured-data/homelessness-analysis/cluster_data_svg_v3.csv');
const altText = require('../../../../../static/unstructured-data/homelessness-analysis/homelessness_alt_text_panel3_2019.csv');

const DataModule = {
  mem: { us: map,
    cfdaState: cfdaStateData,
    barChart: barChart,
    states: stateList,
    acr: acronyms,
    pop: cocPopulation,
    treeData: treeData,
    cluster: cluster,
    infographicData: infographicData,
    altText: altText
  },

  loadMap: (cb) => {
    cb(DataModule.mem.map);
  },

  loadCfdaStates: (cb) => {
    cb(DataModule.mem.cfdaState);
  },

  loadBarChart: (cb) => {
    cb(DataModule.mem.barChart);
  },

  loadStates: (cb) => {
    cb(DataModule.mem.states);
  },

  loadAcr: (cb) => {
    cb(DataModule.mem.acr);
  },

  loadPopulations: (cb) => {
    cb.forEach((d) => {
      d.total_homeless = +d.total_homeless;
      d.chronically_homeless = +d.chronically_homeless;
      d.sheltered_homeless = +d.sheltered_homeless;
      d.unsheltered_homeless = +d.unsheltered_homeless;
      d.homeless_individuals = +d.homeless_individuals;
      d.homeless_veterans = +d.homeless_veterans;
      d.homeless_people_in_families = +d.homeless_people_in_families;
      d.homeless_unaccompanied_youth = +d.homeless_unaccompanied_youth;
      d.amount = +d.amount;
    });
    cb(DataModule.mem.pop);
  }
};

export default DataModule;
