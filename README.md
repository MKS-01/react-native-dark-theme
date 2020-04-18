# React-Native-Dark-Theme

React native dark theme setup using https://reactnative.dev/docs/appearance with styled-components + hooks.

For more details check out: https://mks-technophile.netlify.app/blog/react-native-dark-theme/

## Getting Started

`$ yarn install`

### before running apps on iOS

`$ cd ios && pod install`

`$ cd ..`

### Running your React Native application

- android

`$ npx react-native run-android`

- iOS

`$ npx react-native run-ios`

### Change default iOS Simulator

on root directory

`$ xcrun simctl list devices`

`$ npx react-native run-ios --simulator="iPhone 11"`

<div>
<img src="light.png" alt="Light theme Screenshot" width="277" height="508">
<img src="dark.png" alt="Dark theme Screenshot" width="277" height="508">
</div>

<!--
![Light Theme Screenshot](light.png =277x508)
![Dark Theme Screenshot](dark.png =277x508) -->
