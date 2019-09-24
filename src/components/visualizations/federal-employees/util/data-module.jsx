const statesData = require('../../../../data/federal-employees/states.json');
const agenciesData = require('../../../../data/federal-employees/agencies.json');
const occupationCategoriesData = require('../../../../data/federal-employees/occupationCategories.json');
const employeesData = require('../../../../data/federal-employees/employees.json');
const employeesSalariesData = require('../../../../data/federal-employees/employeeSalaries.json');

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
				cbs.forEach((cb) => cb(DataModule.mem.employeeSalaries, props));
	}
};

export default DataModule;