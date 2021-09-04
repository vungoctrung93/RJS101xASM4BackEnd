
var { STAFFS } = require('../data/staffs')
var { DEPARTMENTS } = require('../data/departments')
exports.getStaffsSalary = (req, res, next) => {
    //employee
    const staffsSalary = STAFFS.map((staff)=>{
        staff.salary = Math.round((staff.salaryScale * 3000000) + (staff.overTime * 200000));
        return staff;
    })
    res.status(200).json(staffsSalary);
};
