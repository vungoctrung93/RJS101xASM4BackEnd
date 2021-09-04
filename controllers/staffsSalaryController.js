
var { STAFFS } = require('../data/staffs')
var { DEPARTMENTS } = require('../data/departments')
exports.getStaffsSalary = (req, res, next) => {
    //employee
    const staffsSalary = STAFFS.map((staff)=>{
        if(staff.annualLeave === undefined) {
            staff.annualLeave = 0;
        }
        if(staff.salaryScale === undefined) {
            staff.salaryScale = 1;
        }
        staff.salary = Math.round(staff.salaryScale * 3000000 + staff.overTime * 200000 );
        return staff;
    })
    res.status(200).json(staffsSalary);
};
