const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  console.log("BODY recibido:", req.body);
  console.log("Nombre recibido:", name);

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      error: "Band name is required",
    });
  }

  res.status(200).json({
    message: "Band name received",
    bandName: name.trim(),
  });
});

module.exports = router;
