/**
 * File: db.ts
 * Author: Priyanka Saxena
 * StudentID: 200583643
 * Date: 2024-06-21
 */

let remoteURI=(process.env.MONGO_URI) as string;

export default {
    remoteURI: remoteURI,
}

