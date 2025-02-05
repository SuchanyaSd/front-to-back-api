exports.register = (req, res, next) => {
  try {
    res.json({ message: "Login" });
  } catch (err) {
    next(err);
    res.status(500).json({ message: "Server Error!!" });
  }
};
