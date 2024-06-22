"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMusician = exports.UpdateMusician = exports.AddMusician = exports.DisplayMusicianById = exports.DisplayMusicianList = void 0;
const musician_1 = __importDefault(require("../Models/musician"));
const Util_1 = require("../Util");
function DisplayMusicianList(req, res, next) {
    musician_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Musician List Retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
    });
}
exports.DisplayMusicianList = DisplayMusicianList;
function DisplayMusicianById(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a musician", data: "" });
    }
    else {
        musician_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "Musician Retrieved and Displayed", data: data });
            }
            else {
                res.status(404).json({ success: false, msg: "Musician not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
        });
    }
}
exports.DisplayMusicianById = DisplayMusicianById;
function AddMusician(req, res, next) {
    let genres = (req.body.genres) ? (0, Util_1.SanitizeArray)(req.body.genres) : (0, Util_1.SanitizeArray)("");
    let instruments = (req.body.instruments) ? (0, Util_1.SanitizeArray)(req.body.instruments) : (0, Util_1.SanitizeArray)("");
    let musician = new musician_1.default({
        fullName: req.body.fullName,
        genres: genres,
        instruments: instruments,
        labels: req.body.labels,
        born: req.body.born,
        yearsActive: req.body.yearsActive,
        spouses: req.body.spouses,
        children: req.body.children,
        relatives: req.body.relatives,
        notableWorks: req.body.notableWorks,
        imageURL: req.body.imageURL
    });
    musician_1.default.create(musician)
        .then(() => {
        res.status(200).json({ success: true, msg: "Musician added", data: musician });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
    });
}
exports.AddMusician = AddMusician;
function UpdateMusician(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a musician", data: "" });
    }
    else {
        let genres = (req.body.genres) ? (0, Util_1.SanitizeArray)(req.body.genres) : (0, Util_1.SanitizeArray)("");
        let instruments = (req.body.instruments) ? (0, Util_1.SanitizeArray)(req.body.instruments) : (0, Util_1.SanitizeArray)("");
        let musicianToUpdate = new musician_1.default({
            _id: id,
            fullName: req.body.fullName,
            genres: genres,
            instruments: instruments,
            labels: req.body.labels,
            born: req.body.born,
            yearsActive: req.body.yearsActive,
            spouses: req.body.spouses,
            children: req.body.children,
            relatives: req.body.relatives,
            notableWorks: req.body.notableWorks,
            imageURL: req.body.imageURL
        });
        musician_1.default.updateOne({ _id: id }, musicianToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Musician updated", data: musicianToUpdate });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
        });
    }
}
exports.UpdateMusician = UpdateMusician;
function DeleteMusician(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a musician", data: "" });
    }
    else {
        musician_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Musician deleted", data: id });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
        });
    }
}
exports.DeleteMusician = DeleteMusician;
//# sourceMappingURL=musician.js.map