const Tag = require('../models/tag');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

exports.getTags = function getTags(req, res) {
    Tag.findById(req.params.scaleID,(err, tags) => res.json(err || tags));

}

exports.addTag = function addTag(req, res) {
    const tag = new Tag(req.body);
    tag.save((err, savedTag) => res.json(err || savedTag));
}

exports.uploadFile = function uploadFile(req, res, next) {
    let imageBuffer = req.file.buffer;
    console.log(imageBuffer);
    // if (!filedata) {
    //     res.send("Ошибка при загрузке файла");
    // } else {
    const files = imagemin.buffer(imageBuffer, {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: '80'
            })
        ]
    }).then((buffer) => console.log(buffer));

    // res.send("Файл загружен");
    // }
}