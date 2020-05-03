# React-Native-Dark-Theme

React native dark theme setup using https://github.com/react-native-community/react-native-netinfo.

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
<img src="./connected.png" alt="Status: connected" width="277" height="508">
<img src="./error.png" alt="Status: No Netwok" width="277" height="508">
</div>
