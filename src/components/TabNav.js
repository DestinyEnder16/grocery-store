import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Cart, FavoriteSvg, Home, UserSvg } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  tab: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 8,
    borderRadius: 10,
  },
  tabTxt: { color: 'black', fontFamily: 'Poppins-Font-Semibold' },
});

export default function MyTabBar({ state, descriptors, navigation }) {
  // const { colors } = useTheme();
  // const { buildHref } = useLinkBuilder();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          let icon; // Use let so it can be reassigned

          switch (route.name) {
            case 'Home':
              icon = <Home />;
              break;
            case 'Cart':
              icon = <Cart />;
              break;
            case 'Favorite':
              icon = <FavoriteSvg />;
              break;
            case 'Profile':
              icon = <UserSvg />;
              break;
          }
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              // href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tab, isFocused && { backgroundColor: '#eee' }]}
            >
              <View>{icon}</View>
              {isFocused && <Text style={styles.tabTxt}>{label}</Text>}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
