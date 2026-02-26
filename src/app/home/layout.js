import MyTabBar from '@/src/components/TabNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CartScreen from './screens/cart';
import FavoriteScreen from './screens/favorite';
import Homepage from './screens/homepage';
import ProfileScreen from './screens/profile';

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        // tabBarShowLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function HomeLayout() {
  return (
    <SafeAreaProvider>
      <RootTabs />
    </SafeAreaProvider>
  );
}
