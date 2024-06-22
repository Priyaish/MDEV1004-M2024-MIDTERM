/**
 * File: musicianModel.ts
 * Author: Priyanka Saxena
 * StudentID: 200583643
 * Date: 2024-06-21
 */

import { Schema, model, Document } from 'mongoose';

// Define the IMusician interface

interface IMusician extends Document {
  fullName: string;
  genres: string[];
  instruments: string[];
  labels: string[];
  born: Date;
  yearsActive: string;
  spouses: string[];
  children: string[];
  relatives: string[];
  notableWorks: string[];
  imageURL: string;
}



// Define the movie schema

const musicianSchema = new Schema<IMusician>({
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
  

const Musician = model<IMusician>('Musician', musicianSchema);

export default Musician;
