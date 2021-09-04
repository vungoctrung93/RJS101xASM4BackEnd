
var { STAFFS } = require('../data/staffs')
var { DEPARTMENTS } = require('../data/departments')
exports.getStaffs = (req, res, next) => {
    var staffsInDepartment = STAFFS.filter((staff)=> {
        return staff.departmentId.toUpperCase() === req.params.id.toUpperCase()
    });
    res.status(200).json(staffsInDepartment);
};
exports.getDepartments = (req, res, next) => {
  res.status(200).json(DEPARTMENTS);
};