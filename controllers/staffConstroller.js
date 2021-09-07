
var { STAFFS } = require('../data/staffs')
var { DEPARTMENTS } = require('../data/departments')
exports.getStaffs = (req, res, next) => {
  res.status(200).json(STAFFS);
};

exports.addStaff = (req, res, next) => {
  var newStaff = {
    name: req.body.name,
    doB: req.body.doB,
    salaryScale: req.body.salaryScale,
    startDate: req.body.startDate,
    departmentId: req.body.departmentId,
    annualLeave: req.body.annualLeave,
    overTime: req.body.overTime,
    image: req.body.image,
  }

  newStaff.id = STAFFS.length;
  STAFFS.forEach(staff => {
    if (staff.id > newStaff.id) {
      newStaff.id = staff.id + 1;
    }
  });
  STAFFS.push(newStaff);
  DEPARTMENTS.forEach(department => {
    if (department.id === newStaff.departmentId) {
      department.numberOfStaff++;
    }
  });
  console.log('New staff added!');
  // add staff in db
  res.status(201).json(STAFFS);
};


exports.updateStaff = (req, res, next) => {

  var index = -1;
  STAFFS.forEach((staff, i) => {
    if (Number(staff.id) === Number(req.body.id)) {
      index = i;
    }
  });
  if (index < 0) {
    res.status(404).json();
  } else {
    if (req.body.name) {
      STAFFS[index].name = req.body.name;
    }
    if (req.body.doB) {
      try{
        req.body.doB = new Date(req.body.doB);
      }catch(e){
        console.log("Staff update doB wrong date format");
      }
      STAFFS[index].doB = req.body.doB;
    }
    if (req.body.salaryScale) {
      STAFFS[index].salaryScale = req.body.salaryScale;
    }
    if (req.body.startDate) {
      try{
        req.body.doB = new Date(req.body.doB);
      }catch(e){
        console.log("Staff update startDate wrong date format");
      }
      STAFFS[index].startDate = req.body.startDate;
    }
    if (req.body.departmentId) {
      STAFFS[index].departmentId = req.body.departmentId;
    }
    if (req.body.annualLeave) {
      STAFFS[index].annualLeave = req.body.annualLeave;
    }
    if (req.body.overTime) {
      STAFFS[index].overTime = req.body.overTime;
    }
    if (req.body.image) {
      STAFFS[index].image = req.body.image;
    }
    //tested
    console.log('Staff at index ' + index + ' has been updated');
    // update staff in db

    res.status(201).json(STAFFS);
  }
};


exports.removeStaff = (req, res, next) => {
  var index = -1;
  STAFFS.forEach((staff, i) => {
    if (Number(staff.id) === Number(req.params.id)) {
      index = i;
    }
  });
  if (index < 0) {
    res.status(404).json();
  } else {
    DEPARTMENTS.forEach(department => {
      if (department.id === STAFFS[index].departmentId) {
        department.numberOfStaff--;
      }
    });
    STAFFS.splice(index, 1);
    console.log('Staff with id: ' + req.params.id + ' has been removed!');
    
    res.status(200).json(STAFFS);
  }
};
