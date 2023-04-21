import { SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import { Button, ButtonSize, ButtonStyle } from '@components/Button';

// Stores
import { useNoteStore } from '@store/useNoteStore';

// Constants
import { Constants } from '@constants/Constants';

// Components
import { NoteEntry } from '@components/NoteEntry';

export default function Main({navigation}) {

    // Create table if not exists.
    const notes = useNoteStore((state) => state.notes);
    const transitionToNewNoteScreen = () => {
        navigation.navigate(Constants.ADD_NOTE_SCREEN);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <SafeAreaView>
                <Text style={styles.noteHeader}>
                Your notes
                </Text>
            </SafeAreaView>
            </View>

            {/* Render note component. */}
            <ScrollView style={styles.notesView}>
            {
              notes.map((note, index) => {
                return (
                  <NoteEntry key={index} note={note} />
                )
              })
            }
            </ScrollView>

            {/* Add new note */}
            <View style={styles.newNoteContainer}>
            <Button 
                text="+" 
                style={ButtonStyle.Primary}
                size={ButtonSize.Large} 
                clickHandler={transitionToNewNoteScreen}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Constants.BACKGROUND_PRIMARY,
      height: "100%"
    },
    header: {
      backgroundColor: "#C5AE69",
    },
    notesView: {
      height: "75%",
      flexGrow: 0
    },
    noteHeader: {
      fontSize: 32,
      fontWeight: 'bold',
      paddingLeft: 24,
      paddingBottom: 8,
    },
    noteTitle: {
      color: 'white',
      fontSize: 22
    },
    newNoteContainer: {
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 50
    }
});