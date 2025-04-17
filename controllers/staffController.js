const staff = require('../models/staff');

exports.getAllStaff = (req, res) => {
  res.json(staff);
};

exports.getStaffById = (req, res) => {
  const person = staff.find(s => s.id === req.params.id);
  person ? res.json(person) : res.status(404).send('Staff not found');
};

exports.createStaff = (req, res) => {
  const newStaff = req.body;
  staff.push(newStaff);
  res.status(201).json(newStaff);
};

exports.updateStaff = (req, res) => {
  const index = staff.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    staff[index] = { ...staff[index], ...req.body };
    res.json(staff[index]);
  } else {
    res.status(404).send('Staff not found');
  }
};

exports.deleteStaff = (req, res) => {
  const index = staff.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    const removed = staff.splice(index, 1);
    res.json(removed);
  } else {
    res.status(404).send('Staff not found');
  }
};
