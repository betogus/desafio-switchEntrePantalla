import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const Header = ({title, onHandleRoutineScreen, routineScreen}) => {
  return (
    <View style={styles.container}>
      {routineScreen ? <TouchableOpacity onPress={onHandleRoutineScreen}>
      <View style={styles.back}>
        <Text style={styles.backText}>Atrás</Text>
      </View>
    </TouchableOpacity> : null}
      
        <Text style={styles.title}>{title}</Text>

    </View>
  )
}

export default Header