"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const musician_1 = require("../Controllers/musician");
const router = express_1.default.Router();
router.get('/musicians', musician_1.DisplayMusicianList);
router.get('/musicians/:id', musician_1.DisplayMusicianById);
router.post('/musicians', musician_1.AddMusician);
router.put('/musicians/:id', musician_1.UpdateMusician);
router.delete('/musicians/:id', musician_1.DeleteMusician);
exports.default = router;
//# sourceMappingURL=index.js.map