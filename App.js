import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'

const App = () => {
  const [internetReachable, setInternetReachable] = useState('')
  const netInfo = useNetInfo()
  console.log('net info:', netInfo)

  useEffect(() => {
      console.log(() => ['net info changed, new state: ', netInfo])
      setInternetReachable(netInfo.isInternetReachable)

  }, [netInfo])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text>Is internet reachable: {`${internetReachable}`}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
