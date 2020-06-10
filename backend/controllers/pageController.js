const Page = require('../models/page');
exports.addPage = function (req, res) {
    const page = new Page(req.body);
    page.save((err, savedPage) => res.json(err || savedPage));
}
exports.getPageById = function (req, res) {
    Page.findById(req.params.pageID,(err, page) => res.json(err || page));
}

exports.updatePageById = function (req, res) {
    Page.findOneAndUpdate(req.params.pageID,(err, page) => res.json(err || page));
}

exports.deletePageById = function (req, res) {
    Page.findOneAndRemove(req.params.pageID,(err, page) => res.json(err || page));
}


