# Creating a Landing Page / Screen

Create a mobile application using designs created with Figma.

## Technologies Used

- Expo (React Native)
- Figma
- Google Fonts

## Problems I Encountered

- When using Expo Go, the splash screen behaves differently on emulators and on the physical devices.
- The status bar on my physical device was barely visible due to the color similarities.
- Implementing the 'carousel' feature using the ScrollView component
- Styling
- Building my ap

## Things To Note

1. The Poppins font was used in the Figma design so I needed to install the font (from Google Fonts) and place them in my font folder.

2. To ensure that my app waits until the fonts are downloaded before displaying the UI, I kept the splash screen visible until loading was complete.

3. Expo does not handle the rendering of SVG files, to tackle that issue I used the following packages

- react-native-svg
- react-native-svg-transformer

4. A development build has already been created using Expo.

5. To ensure smooth and accurate scrolls, I used the width of the phone to determine the width of my component.
