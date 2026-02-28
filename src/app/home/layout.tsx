import ProfileDrawer from '@/src/components/ProfileDrawer';
import { Cart, FavoriteSvg, Home, UserSvg } from '@/src/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyTabBar from '../../components/TabNav';
import CartScreen from './screens/cart';
import FavoriteScreen from './screens/favorite';
import Homepage from './screens/homepage';
import ProfileScreen from './screens/profile';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Poppins-Font-Semibold',
    // color: 'grey',
    fontSize: 18,
  },
  h3: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 24,
  },
  drawerTab: { marginVertical: 10 },
});

const ProfileScreenWithDrawer = () => {
  const activeColor = 'blue';
  const inactiveColor = 'grey';
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerActiveTintColor: activeColor }}
      drawerContent={(props) => {
        // 1. Find the active tab name within MainTabs
        const route = props.state.routes.find((r) => r.name === 'MainTabs');
        const activeTab = route
          ? getFocusedRouteNameFromRoute(route) ?? 'Home'
          : 'Home';

        return (
          <DrawerContentScrollView {...props}>
            <View style={{ marginBottom: 20, paddingLeft: 20 }}>
              <ProfileDrawer
                fn={() =>
                  props.navigation.navigate('MainTabs', { screen: 'Profile' })
                }
                height={100}
                width={100}
              />
              <Text style={styles.h3}>Destiny</Text>
            </View>

            <DrawerItem
              label="Home"
              icon={({ color }) => (
                <Home
                  color={activeTab === 'Home' ? activeColor : inactiveColor}
                />
              )}
              focused={activeTab === 'Home'} // 2. Manually set focus
              inactiveTintColor="grey"
              labelStyle={styles.txt}
              style={styles.drawerTab}
              onPress={() =>
                props.navigation.navigate('MainTabs', { screen: 'Home' })
              }
            />

            <DrawerItem
              label="Cart"
              icon={({ color }) => (
                <Cart
                  color={activeTab === 'Cart' ? activeColor : inactiveColor}
                />
              )}
              focused={activeTab === 'Cart'}
              style={styles.drawerTab}
              inactiveTintColor="grey"
              labelStyle={styles.txt}
              onPress={() =>
                props.navigation.navigate('MainTabs', { screen: 'Cart' })
              }
            />

            <DrawerItem
              label="Favorite"
              icon={() => (
                <FavoriteSvg
                  color={activeTab === 'Favorite' ? activeColor : inactiveColor}
                />
              )}
              inactiveTintColor="grey"
              style={styles.drawerTab}
              focused={activeTab === 'Favorite'}
              labelStyle={styles.txt}
              onPress={() =>
                props.navigation.navigate('MainTabs', { screen: 'Favorite' })
              }
            />
            <DrawerItem
              label="Profile"
              icon={() => (
                <UserSvg
                  color={activeTab === 'Profile' ? activeColor : inactiveColor}
                />
              )}
              style={styles.drawerTab}
              focused={activeTab === 'Profile'}
              labelStyle={styles.txt}
              onPress={() =>
                props.navigation.navigate('MainTabs', { screen: 'Profile' })
              }
            />

            {/* Repeat focused={activeTab === 'Name'} for Favorite and Profile */}
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="MainTabs" component={RootTabs} />
    </Drawer.Navigator>
  );
};

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
      <ProfileScreenWithDrawer />
    </SafeAreaProvider>
  );
}
