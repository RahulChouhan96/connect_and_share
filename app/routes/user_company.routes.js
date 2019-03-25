const express = require("express");

let userCompanyCtrl = require("../controllers/user_company.controller");
let router = express.Router();

// updated the "isCompany" status in "user_profile" document
router
    .route("/update_company_status")
    .post(userCompanyCtrl.updateIsCompanyStatus);

// A user adds his company
router
    .route("/add_company_for_user")
    .post(userCompanyCtrl.addOneCompanyForOneUser);

router
    .route("/add_one_emp_to_one_company")
    .post(userCompanyCtrl.addOneEmpToOneCompany);

router
    .route("/remove_emp_from_one_company")
    .post(userCompanyCtrl.removeEmpFromCompany);

module.exports = router;