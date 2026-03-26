const Employee = require("../models/employee");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

exports.loginuser = async function (req, res) {
  try {
    const { empName, empPass } = req.body;
    const employee = await Employee.findOne({ empName });

    if (!employee) {
      return res.status(401).send("Invalid credentials");
    }
    if (employee.empPass === empPass) {
    
      const token = jwt.sign(
        { 
          empName: employee.empName,
          id: employee._id 
        }, 
        SECRET_KEY, 
        { expiresIn: "1h" }
      );
      return res.send({ token });
    } else {
      return res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getDefault = function (req, res) {
  res.send("You are on the root route. from controller");
};

exports.getEmployees = async function (req, res) {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching employees");
  }
};

exports.createEmployee = async function (req, res) {
  try {
    const { empName, empPass } = req.body;
    const emp = new Employee({ empName, empPass });
    const savedEmployee = await emp.save();
    res.status(201).send(`Created ${savedEmployee.empName}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating employee");
  }
};

exports.addnewweight = async function (req, res) {
  try {
    const { empName } = req.body;
    const empWeight = parseInt(req.body.empWeight);

    const result = await Employee.updateOne(
      { empName },
      {
        $addToSet: {
          employeeWeights: { empWeight },
        },
      },
      { upsert: false }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send("Employee not found");
    }

    res.send("done");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding weight");
  }
};