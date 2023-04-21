import Note from '@models/Note';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('../notes.db');

const createTable = (): void => {
    db.transaction(tx => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content, TEXT, date DATETIME)")
    }, (error) => {
        console.log("Unable to create table: ", error)
    }, () => {
        console.log("Successfully created the table for notes")
    })
}

const getNotes = (): Promise<Note[]> => {
    return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM notes ORDER BY date DESC;',
        [], (_, { rows }) => {
            const r = rows as unknown as { _array: Note[] };
            var notes = r._array;
             resolve(notes);
          });
        }, (error) => {
            console.log("Unable to retrieve notes:", error.message)
            reject(error);
        }, () => {
            console.log("Requested all notes.");
        })
    }) 
}

const addNote = (note: Note): void => {
    db.transaction(tx => {
        tx.executeSql("INSERT INTO notes(title, content, date) VALUES(?, ?, ?)", [note.title, note.content, note.date])
    }, (error) => {
        console.log("Unable to add note, reason: ", error)
    }, () => {
        console.log("Succesfully added note.")
    })
}

export const database = {
    createTable,
    getNotes,
    addNote
}