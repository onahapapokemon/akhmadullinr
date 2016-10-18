function findEmployeesRole(name) {
    var arr = name.split(' ');
    var worker = employees.filter(function(a) {
        return a.firstName === arr[0] && a.lastName === arr[1];
    })
    return worker.length ? worker[0].role : 'Does not work here!';
}

/* alternative

 function findEmployeesRole(name) {
 for(var i = 0; i < employees.length; i++)
 if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
 return "Does not work here!";
 }

 */

// http://www.codewars.com/kata/55c9fb1b407024afe6000055/solutions/javascript