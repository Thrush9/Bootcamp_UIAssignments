// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const studentsList = [
    {name: 'Ramesh', subjects: [{subject: 'Grammar', marks: 54}, {subject: 'Accounts', marks: 79}]},
    {name: 'Suresh', subjects: [{subject: 'Grammar', marks: 35}, {subject: 'Physics', marks: 100}]},
    {name: 'Naresh', subjects: [{subject: 'Grammar', marks: 88}, {subject: 'Accounts', marks: 98}]},
    {name: 'Mahesh', subjects: [{subject: 'Grammar', marks: 84}, {subject: 'Physics', marks: 98}]},
    {name: 'Umesh', subjects: [{subject: 'Grammar', marks: 100}, {subject: 'Physics', marks: 90}]},
    {name: 'Rajesh', subjects: [{subject: 'Grammar', marks: 48}, {subject: 'Accounts', marks: 48}]},
    {name: 'Lokesh', subjects: [{subject: 'Grammar', marks: 95}, {subject: 'Physics', marks: 55}]},
    {name: 'Samesh', subjects: [{subject: 'Grammar', marks: 64}, {subject: 'Accounts', marks: 78}]},
    {name: 'Sujith', subjects: [{subject: 'Grammar', marks: 55}, {subject: 'Physics', marks: 55}]},
    {name: 'Ajith', subjects: [{subject: 'Grammar', marks: 34}, {subject: 'Accounts', marks: 58}]}
  ]

  function getPercentage(student){
    return (student.subjects[0].marks + student.subjects[1].marks) / student.subjects.length;
}

const result = (list) => {    
    let resultcard = list.reduce((obj,item) => {
          obj[item.name] = getPercentage(item) 
          return obj },{});          
        return resultcard;
  };
  
  const finResult = result(studentsList);

  console.log(finResult);