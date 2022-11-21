import React from 'react'
import { styles } from '../header/styles'

const Item = ({item}) => {
  return (
    <View style={styles.cointainer}>
      <Text>{item.name}</Text>
    </View>
  )
}

export default Item