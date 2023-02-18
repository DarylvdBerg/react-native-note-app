import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { Button, ButtonSize, ButtonStyle } from '@components/Button';

// Constants
import { Constants } from '@constants/Constants';

export default function Main({navigation}) {

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
    },
    header: {
      backgroundColor: "#C5AE69",
    },
    noteHeader: {
      fontSize: 32,
      fontWeight: 'bold',
      paddingLeft: 24,
      paddingBottom: 8,
    },
    newNoteContainer: {
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 50
    }
});