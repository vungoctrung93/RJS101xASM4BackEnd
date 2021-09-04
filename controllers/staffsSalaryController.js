
var { STAFFS } = require('../data/staffs')
var { DEPARTMENTS } = require('../data/departments')
exports.getStaffsSalary = (req, res, next) => {
    //employee
    const staffsSalary = STAFFS.map((staff)=>{
        const salary = Math.round((staff.salaryScale * 3000000) + (staff.overTime * 200000));
        const staffSalary = {
            id: staff.id,
            name: staff.name,
            doB: staff.doB,
            startDate: staff.startDate,
            departmentId: staff.departmentId,
            annualLeave: staff.annualLeave,
            image: staff.image,
            salary : salary,
        }
        return staffSalary;
    })
    res.status(200).json(staffsSalary);
};
