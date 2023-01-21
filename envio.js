import React from 'react'
import { Button, Text, View } from 'react-native/types'

export const envio = () => {
  return (
    <View style={{flex:1, }}>
        <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <Button title='enviar mensaje'/>
        </View>
    </View>
  )
}
export default envio;
