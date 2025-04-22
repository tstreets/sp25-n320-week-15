const router = require("express").Router();
const { getAllGemCharacters } = require("../database");

router.get("/test/:userId", function (req, res) {
  res.status(200).json({ msg: "Success", userId: req.params.userId });
});

router.get("/gems/all", async function (req, res) {
  const allGems = await getAllGemCharacters();
  res.status(200).json({ gems: allGems, total: allGems.length });
});

router.get("/gems/user/:userId", async function (req, res) {
  res.status(200).json({ gems: [], total: 0 });
});

module.exports = router;
