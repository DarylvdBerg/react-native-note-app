/**
 * TODO:
 * Add redux as state manager
 * Add note entry in app
 * Add note making view
 * Save notes in sqlite?
 **/

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import { Constants } from '@constants/Constants';

// Screens
import Main from '@screens/Main';
import AddNote from '@screens/AddNote';

// Hooks
import useDatabase from '@hooks/useDatabase';

export default function App() {
  const Stack = createNativeStackNavigator();
  const isDbLoading = useDatabase();

  if(isDbLoading) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name={Constants.MAIN_SCREEN}
            component={Main}
          />
          <Stack.Screen 
            name={Constants.ADD_NOTE_SCREEN}
            component={AddNote}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return null;
  }
};
