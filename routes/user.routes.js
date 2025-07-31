const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/user.controller");
const { getDashboard, getStatisticsDashboard, getReportFilters, generateReport, getOverviewDashboard } = require("../controllers/others.controller");
const { verifyToken } = require("../middlewares/authJwt");

// Protected route to get all users
router.get("/users", verifyToken, getAllUsers);
router.get("/analytics/dashboard", verifyToken, getDashboard);
router.get("/statistics/dashboard", verifyToken, getStatisticsDashboard);
router.get("/reports/filters", verifyToken, getReportFilters);
router.post("/reports/generate", verifyToken, generateReport);
router.get("/admin/dashboard", verifyToken, getOverviewDashboard);

module.exports = router;
