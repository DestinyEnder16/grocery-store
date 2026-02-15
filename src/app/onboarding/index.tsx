import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BtnNav from '../../components/BtnNav';
import ProgressBar from '../../components/ProgressBar';

// IMPORTANT SVG IMPORTS
import { useRef, useState } from 'react';
import Box from '../../../assets/icons/big_box.svg';
import Register from '../../../assets/icons/cash_register.svg';
import Truck from '../../../assets/icons/delivery_truck.svg';
import Trolley from '../../../assets/icons/full_trolley.svg';
import Screen from '../../components/Screen';

const styles = StyleSheet.create({
  icon: { marginBottom: 28 },
});

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export default function Index() {
  const data = [
    {
      index: 0,
      headline: 'Welcome to Grocerya',
      text: 'Get your grocery needs at your service within a minute. Fast, efficient, and convenient',
      Img: <Trolley style={styles.icon} />,
    },
    {
      index: 1,
      headline: 'Get any packages delivered',
      text: 'Get all your items conveniently, ensuring everything you need arrives without any hassle.',
      Img: <Truck style={styles.icon} />,
    },
    {
      index: 2,
      Img: <Box style={styles.icon} />,
      headline: 'Protected package delivery',
      text: 'Your groceries are carefully packaged to ensure they arrive safely and in perfect condition',
    },
    {
      index: 3,
      Img: <Register style={styles.icon} />,
      headline: 'Best price guaranteed',
      text: 'Allowing you to stock up on your favorite items while staying withing your budget',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = data.length - 1;

  const flatListRef = useRef<FlatList>(null);

  const goToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, lastIndex));

    flatListRef.current?.scrollToIndex({
      index: clamped,
      animated: true,
    });

    setActiveIndex(clamped);
  };

  const handleScroll = (event: any) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollOffset / SCREEN_WIDTH);

    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  // Add to your ScrollView:
  // onMomentumScrollEnd={handleScroll}
  // scrollEventThrottle={16}
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          height: '100%',
          backgroundColor: '#fff',
          paddingVertical: 24,
        }}
      >
        <ProgressBar numBars={4} color="#0D0D0D" activeIndex={activeIndex} />

        <View style={{ flex: 1 }}>
          <FlatList
            ref={flatListRef}
            data={data}
            horizontal
            pagingEnabled
            decelerationRate={'fast'}
            keyExtractor={(item) => item.index.toString()}
            renderItem={({ item }) => (
              <Screen
                headline={item.headline}
                text={item.text}
                Img={item.Img}
              />
            )}
            onMomentumScrollEnd={handleScroll}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            getItemLayout={(_, index) => ({
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            })}
          />
        </View>

        <View>
          <BtnNav
            activeIndex={activeIndex}
            fn={goToIndex}
            lastIndex={lastIndex}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
