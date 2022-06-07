"use strict";
//SINGLETONS AND PRIVATE CONSTRUCTORS
//Singleton Pattern - in this pattern we make sure that 
//we can only ever create only one instance of a certain class.
//This is useful when you can't/ don't want to use static methods and properties
//but you wan to make sure that you can only create one object, based on a class
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT DEPARTMENT - ID: ' + this.id);
    }
}
//Here we want to make sure that we can create only one object, based on this class,
//because we have only one accounting department in the company. 
//To achieve this, we will turn the constructor of the AccountingDepartment class into a 'private' constructor:
class AccountingDepartment extends Department {
    //To achieve this, we will turn the constructor of the AccountingDepartment class into a 'private' constructor:
    //What 'private' here does, it makes the constructor only accessible from inside the class, 
    //and it makes sure we can't call 'new' on it. This would not run: new AccountingDepartment('d2', []) 
    //How do we get inside of the class if we can't create objects on it any more? - With static methods.
    //A Static Method can be called on the class itself. 
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    //here we add a Static Method getInstance. 
    //It will check if we already have an instance of this class, and if not, return a new one
    //For that we add a private static property instance (see above)
    //We use this private static property here
    //So this code can only run once because if we don't have this instance, we create a new one,
    // but if it already exists, then it just returns the same one.
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'Phil') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('ACCOUNTUNG DEPARTMENT - ID: ' + this.id);
    }
}
const employee1 = Department.createEmployee('Dahlia');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
//const accounting = new AccountingDepartment('d2', []);
//So now this is how we will create a new instance of the AccountingDepartment class. 
const accounting = AccountingDepartment.getInstance();
//But if I do this again, I will get the same instance! Because I can only create it once. 
const accounting2 = AccountingDepartment.getInstance();
accounting.addReport('This is a new important report.');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Year End report';
accounting.addEmployee('Max');
accounting.addEmployee('Dory');
accounting.printReports();
accounting.printEmployeeInformation();
it.describe();
accounting.describe();
