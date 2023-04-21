import { create } from 'zustand'

import Note  from '@models/Note';

import { database } from '@helpers/DBHelper';


// Interface
interface NoteStore {
    notes: Note[];
    loadNotesFromDb: () => void;
    addNote: (note: Note) => void;
}

export const useNoteStore = create<NoteStore>()((set) => ({
    notes: [],
    loadNotesFromDb: () => {
        database.getNotes().then((notes) => {
            set(() => ({notes: notes}));
        })
    },
    addNote: (note: Note) => set((state) => ({ notes: [...state.notes, note] })),
}))