import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../pages/Dashboard';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
}
