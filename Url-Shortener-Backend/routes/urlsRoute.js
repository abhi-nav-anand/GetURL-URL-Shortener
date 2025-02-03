const express = require("express");
const router = express.Router();
const {createUrl, fetchAllUrls, fetchUrlDetails, redirectUrl} = require("../controllers/urlController");

router.post("/urls", createUrl);
router.get("/urls", fetchAllUrls);
router.get("/:id/details", fetchUrlDetails);
router.get("/:id", redirectUrl);

module.exports = router;