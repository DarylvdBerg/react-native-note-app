import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { Button, ButtonStyle } from '@components/Button';

/**
 * TODO:
 * Add redux as state manager
 * Add note entry in app
 * Add note making view
 * Save notes in sqlite?
 **/

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.noteHeader}>
            Your notes
          </Text>
        </SafeAreaView>
      </View>

      <View style={styles.newNoteContainer}>
        <Button text="+" style={ButtonStyle.Primary}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
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
