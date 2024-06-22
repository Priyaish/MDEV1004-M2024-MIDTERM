"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const musicianSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    genres: { type: [String], required: true },
    instruments: { type: [String], required: true },
    labels: { type: [String], required: true },
    born: { type: Date, required: true },
    yearsActive: { type: String, required: true },
    spouses: { type: [String], required: true },
    children: { type: [String], required: true },
    relatives: { type: [String], required: true },
    notableWorks: { type: [String], required: true },
    imageURL: { type: String, required: true }
});
const Musician = (0, mongoose_1.model)('Musician', musicianSchema);
exports.default = Musician;
//# sourceMappingURL=musician.js.map