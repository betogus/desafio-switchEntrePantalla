import React from 'react'
import { styles } from './styles'
import { View, Text } from 'react-native'
import colors from '../../constants/colors'

const ItemButton = ({children, style}) => {
  return (
    <View>
        <View style={styles.buttonContainer}>
            <Text style={{fontSize: 18, color: colors.text, fontFamily: 'Montserrat-Regular'}}>{children}</Text>
        </View>
        <View style={{...styles.recDesign, ...style}}/>
    </View>
  )
}

export default ItemButton