export default class User{
    constructor(name,YearOfBirth,Salary){
       this.name=name;
        this.YearOfBirth=YearOfBirth;
        this.Salary=Salary;
    }
}
export function UserAge(YearOfBirth){
     let  userAge= 2024- YearOfBirth;
     return userAge;
}

