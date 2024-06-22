/**
 * File: musicianControllers.ts
 * Author: Priyanka Saxena
 * StudentID: 200583643
 * Date: 2024-06-21
 */

import { Request, Response, NextFunction } from 'express';
import Musician from '../Models/musician'; 
import { SanitizeArray } from '../Util';

/**
 * This function displays the musician list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusicianList(req: Request, res: Response, next: NextFunction): void {
    Musician.find({})
        .then((data) => {
            res.status(200).json({ success: true, msg: "Musician List Retrieved and Displayed", data: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
        });
}

/**
 * This function displays a single musician by ID in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusicianById(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a musician", data: "" });
    } else {
        Musician.findById({ _id: id })
            .then((data) => {
                if (data) {
                    res.status(200).json({ success: true, msg: "Musician Retrieved and Displayed", data: data });
                } else {
                    res.status(404).json({ success: false, msg: "Musician not found", data: "" });
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
            });
    }
}

/**
 * This function adds a musician to the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function AddMusician(req: Request, res: Response, next: NextFunction): void {
    let genres = (req.body.genres) ? SanitizeArray(req.body.genres as string) : SanitizeArray("");
    let instruments = (req.body.instruments) ? SanitizeArray(req.body.instruments as string) : SanitizeArray("");

    let musician = new Musician({
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

    Musician.create(musician)
        .then(() => {
            res.status(200).json({ success: true, msg: "Musician added", data: musician });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
        });
}

/**
 * This function updates a musician in the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function UpdateMusician(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a musician", data: "" });
    } else {
        let genres = (req.body.genres) ? SanitizeArray(req.body.genres as string) : SanitizeArray("");
        let instruments = (req.body.instruments) ? SanitizeArray(req.body.instruments as string) : SanitizeArray("");

        let musicianToUpdate = new Musician({
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

        Musician.updateOne({ _id: id }, musicianToUpdate)
            .then(() => {
                res.status(200).json({ success: true, msg: "Musician updated", data: musicianToUpdate });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
            });
    }
}

/**
 * This function deletes a musician from the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DeleteMusician(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a musician", data: "" });
    } else {
        Musician.deleteOne({ _id: id })
            .then(() => {
                res.status(200).json({ success: true, msg: "Musician deleted", data: id });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ success: false, msg: "Internal Server Error", data: null });
            });
    }
}
