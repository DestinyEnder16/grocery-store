import BtnNav from '@/src/components/BtnNav';
import ProgressBar from '@/src/components/ProgressBar';
import { Dimensions, FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../../constants/data';

import { useRef, useState } from 'react';

// IMPORTANT SVG IMPORTS
import Screen from '@/src/components/Screen';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export default function Index() {
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
