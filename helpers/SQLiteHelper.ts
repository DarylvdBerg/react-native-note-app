import * as SQLite from 'expo-sqlite';
import Note from '@models/Note';

const db = SQLite.openDatabase("notes.db");

const setupDB = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, date DATE);');
        },
        (error) => {
            reject(error);
        },
        () => {
            resolve(1);
        }
        )
    })
}

const newNote = (note: Note) => {
    db.transaction(tx => {
        tx.executeSql(`INSERT INTO notes (title, content, date) VALUES ('${note.title}', '${note.content}', '${note.date}');`)
    },
    (error) => {
        console.log(error);
    },
    () => {
        
    })
}

const getNotes = (setNotes) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM notes ORDER BY date DESC;',
        [],
        (_, {rows: {_array }}) => {
            setNotes(_array);
        })
    },
    (error) => {
        console.log(error);
    }, 
    () => {
    })
}

export const database = {
    setupDB,
    getNotes,
    newNote
}