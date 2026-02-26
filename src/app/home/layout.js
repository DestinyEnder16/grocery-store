import ProfileDrawer from '@/src/components/Drawer';
import MyTabBar from '@/src/components/TabNav';
import { Cart, FavoriteSvg, Home, UserSvg } from '@/src/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CartScreen from './screens/cart';
import FavoriteScreen from './screens/favorite';
import Homepage from './screens/homepage';
import ProfileScreen from './screens/profile';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Poppins-Font',
    // color: 'grey',
    fontSize: 18,
  },
  h3: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 24,
  },
});

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => (
        <DrawerContentScrollView>
          <View onPress={() => props.navigation.closeDrawer()}>
            {/* <ProfilePicture /> */}
            <ProfileDrawer
              fn={() =>
                props.navigation.navigate('MainTabs', { screen: 'Profile' })
              }
            />
            <Text style={styles.h3}>Destiny</Text>
          </View>

          <DrawerItem
            label="Home"
            icon={() => <Home />}
            activeTintColor="black"
            labelStyle={styles.txt}
            onPress={() =>
              props.navigation.navigate('MainTabs', { screen: 'Home' })
            }
          />

          <DrawerItem
            label="Cart"
            icon={() => <Cart />}
            activeTintColor="black"
            labelStyle={styles.txt}
            onPress={() =>
              props.navigation.navigate('MainTabs', { screen: 'Cart' })
            }
          />
          <DrawerItem
            label="Favorite"
            icon={() => <FavoriteSvg />}
            activeTintColor="black"
            labelStyle={styles.txt}
            onPress={() =>
              props.navigation.navigate('MainTabs', { screen: 'Favorite' })
            }
          />
          <DrawerItem
            label="Profile"
            icon={() => <UserSvg />}
            activeTintColor="black"
            labelStyle={styles.txt}
            onPress={() =>
              props.navigation.navigate('MainTabs', { screen: 'Profile' })
            }
          />
        </DrawerContentScrollView>
      )}
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
