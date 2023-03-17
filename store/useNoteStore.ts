import { create } from 'zustand'

import Note  from '@models/Note';

import { database } from '@helpers/DBHelper';


// Interface
interface NoteStore {
    notes: Note[];
    getNotes: () => void;
    addNote: (note: Note) => void;
}

export const useNoteStore = create<NoteStore>()((set) => ({
    notes: [],
    getNotes: () => set((state) => ({ notes: database.getNotes() })),
    addNote: (note: Note) => set((state) => ({ notes: [...state.notes, note] })),
}))