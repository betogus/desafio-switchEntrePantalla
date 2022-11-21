import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import colors from '../../../constants/colors'
import {styles} from './styles'


const MyRoutine = ({item, onHandleEraseRoutine}) => {
  
const [completed, setCompleted] = useState(false)

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>setCompleted(!completed)}> 
        <Text style={{...styles.text, ...completed?{color: colors.green}:null}}>Ok</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity onPress={()=>onHandleEraseRoutine(item)}><Text style={styles.text}>X</Text></TouchableOpacity>
    </View>
  )
}







export default MyRoutine