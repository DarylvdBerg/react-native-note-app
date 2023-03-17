import Note from '@models/Note';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('notes.db');

const createTable = (): void => {
    db.transaction(tx => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS notes(id int PRIMARY KEY AUTOINCREMENT, title TEXT, content, TEXT, date DATETIME)")
    })
}

const getNotes = (): Note[] => {
    var notes: Note[];

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM notes ORDER BY date DESC;',
        [],
        (_, { rows: {_array}}) => {
            notes = _array;
        });
    }, (error) => {
        console.log("Unable to retrieve notes:", error.message)
    })
    return notes;
}

const addNote = (note: Note): void => {
    db.transaction(tx => {
        tx.executeSql("INSERT INTO notes(title, content, date) VALUES(?, ?, ?)", note.title, note.content, note.date)
    })
}

export const database = {
    createTable,
    getNotes,
    addNote
}