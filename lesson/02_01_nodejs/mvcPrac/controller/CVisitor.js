const Visitor = require("../model/MVisitor");

//방명록 하나 추가
exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (result) => {
    res.send({
      result: true,
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
