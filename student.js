const FULLNAME='Patrycja Królczewska';
const STUDENT_ID=42887;
console.log('My name is ${FULLNAME}. My student ID is ${STUDENT_ID}');
function getStudentFullName(){
    return FULLNAME;
}
function getStudentId(){
    return STUDENT_ID;
}
console.log('My name is' + getStudentFullName()+ '.My student ID is'+ STUDENT_ID);
module.export={
    getStudentFullName,
    getStudentId,
};