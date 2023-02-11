import { SafeAreaView, StyleSheet, View, Text} from 'react-native';

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
  }
});
