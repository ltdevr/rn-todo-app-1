import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{ alignItems: 'center'}}>
      <Image source={require('../../assets/check-list.png')}
      style={{height: 300, width: 300}}
      />
      <Text>Start Adding Your Task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})