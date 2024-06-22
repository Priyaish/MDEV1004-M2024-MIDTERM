/**
 * File: musicianRoutes.ts
 * Author: Priyanka Saxena
 * StudentID: 200583643
 * Date: 2024-06-21
 */

import express from 'express';
import {
  DisplayMusicianList,
  DisplayMusicianById,
  AddMusician,
  UpdateMusician,
  DeleteMusician
} from '../Controllers/musician';

const router = express.Router();

// Route: GET /api/musicians
router.get('/musicians', DisplayMusicianList);

// Route: GET /api/musicians/:id
router.get('/musicians/:id', DisplayMusicianById);

// Route: POST /api/musicians
router.post('/musicians', AddMusician);

// Route: PUT /api/musicians/:id
router.put('/musicians/:id', UpdateMusician);

// Route: DELETE /api/musicians/:id
router.delete('/musicians/:id', DeleteMusician);

export default router;
