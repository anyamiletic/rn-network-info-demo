import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const App = () => {
  const [internetReachable, setInternetReachable] = useState('')

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(() => ['net info changed, new state: ', state])
      setInternetReachable(state.isInternetReachable)
    })

    return unsubscribe()
  }, [])


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
