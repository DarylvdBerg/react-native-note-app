import { StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';

// Constants
import { Constants } from '@constants/Constants';

// Data models
import INote from '@models/Note';
import Note from '@models/Note';

// Components
import { Button, ButtonSize, ButtonStyle } from '@components/Button';

export default function AddNote({navigation}) {
    const [note, setNote] = useState<INote>(null);

    // Clickhandler for submitting then note
    const addNote = async() => {
        if(!note) {
            return;
        }
        
        const newNote = new Note(note.title, note.content);

        // Push to SQLite and state management
        // Navigate back to homescreen
        navigation.pop();
    }

    const handleNoteChanges = (value, name) => {
        setNote({...note, [name]: value})
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Title section */}
            <View>
                <TextInput
                    style={styles.noteTitle}
                    placeholder={"Enter your title"}
                    placeholderTextColor={"white"}
                    onChangeText={title => handleNoteChanges(title, 'title')}
                />
            </View>
            {/* Note section */}
            <View>
                <TextInput
                    style={styles.noteContent} 
                    multiline
                    onChangeText={content => handleNoteChanges(content, 'content')}
                />
            </View>
            {/* Submit note */}
            <View style={styles.addNoteButton}>
                <Button
                    text={"Add note"}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.Medium}
                    clickHandler={addNote}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.BACKGROUND_PRIMARY,
        height: "100%",
        paddingHorizontal: 25
    },
    noteTitle: {
        fontSize: 24,
        paddingTop: 20,
        color: "white"
    },
    noteContent: {
        paddingTop: 20,
        width: "100%",
        height: "80%",
        fontSize: 16,
        color: "white"
    },
    addNoteButton: {
        position: 'absolute',
        bottom: 50,
        width: "100%",
        alignItems: 'center'
    }
})