const statesData = require('../../../../unstructured-data/federal-employees/states.json');
const agenciesData = require('../../../../unstructured-data/federal-employees/agencies.json');
const occupationCategoriesData = require('../../../../unstructured-data/federal-employees/occupationCategories.json');
const employeesData = require('../../../../unstructured-data/federal-employees/employees.json');
const employeesSalariesData = require('../../../../unstructured-data/federal-employees/employeeSalaries.json');

const DataModule = {
	mem: { states: statesData,
	agencies: agenciesData,
	occupationCategories: occupationCategoriesData,
	employeeCounts: employeesData,
	employeesSalaries: employeesSalariesData},

	loadStates: (cb) => {
			cb(DataModule.mem.states);
	},

	loadAgencies: (cb) => {
			cb(DataModule.mem.agencies);
	},

	loadOccupationCategories: (cb) => {
			cb(DataModule.mem.occupationCategories);
	},

	loadEmployeeCountData: (cbs, props) => {
			cbs.forEach((cb) => cb(DataModule.mem.employeeCounts, props));
	},

	loadEmployeeSalaryData: (cbs, props) => {
			cbs.forEach((cb) => cb(DataModule.mem.employeesSalaries, props));
	}
};

export default DataModule;