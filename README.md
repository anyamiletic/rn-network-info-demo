# rn-network-info-demo

### running

in your terminal run:
`npx react-native start`

in a separate terminal run:
`npx react-native run-android` or `npx react-native run-ios` depending on which platform you want to run

### test the netinfo bug

in `App.js` there is a simple use-case for `react-native-netinfo`, registering an event listener and logging the result both in the console and in the screen.
Try disabling your internet connection, it should send a new state but it doesn't. Turning the internet back on also doesn't do anything.
