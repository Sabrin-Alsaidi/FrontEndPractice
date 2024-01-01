import  User ,{ UserAge} from "./User.js";
import TotalSalary from "./SalaryCalculation.js";

let user=new User("SAbrin", 1995 , 12000);
console.log(`User Details : \n -name: ${user.name}\n -Year of Birth: ${user.YearOfBirth} \n -Salary: ${user.Salary}.`);
 console.log(`User Age is : ${UserAge(user.YearOfBirth)}`);
console.log(`Total Salary is : ${TotalSalary(user.Salary)}`);

