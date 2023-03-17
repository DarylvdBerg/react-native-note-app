import { View, Text, StyleSheet } from 'react-native'

// DataModels
import Note from '@models/Note';

interface INoteEntry {
    note: Note;
}

export function NoteEntry(props: INoteEntry) {
    return (
        <View style={styles.noteEntry}>
            <Text style={styles.noteEntryTitle}>{props.note.title}</Text>
            <Text>Date: {props.note.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noteEntry: {
        flexDirection: 'column',
        padding: 10,
        margin: 10,
        backgroundColor: '#c7c5c1'
    },
    noteEntryTitle: {
        fontSize: 16
    }
})