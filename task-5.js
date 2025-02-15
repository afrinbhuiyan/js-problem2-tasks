const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function companyProvideSalaryPerMonth(employees) {
    let companyPerMonthProvide = 0;
    for(let employee of employees){
        const increase = employee.experience * employee.increment;
        const currentSalary = employee.starting + increase;
        companyPerMonthProvide = companyPerMonthProvide + currentSalary; 
    }
    return companyPerMonthProvide;
}

const totalSalaryProvide = companyProvideSalaryPerMonth(employees);
console.log('Company per Month provides all employee salary', totalSalaryProvide);