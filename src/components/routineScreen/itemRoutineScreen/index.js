import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../../../constants/colors'
import ItemButton from '../../itemButton'

const ItemRoutineScreen = ({catalog, catalogRoutines, routines, onHandleAddRoutines}) => {
  const catalogFiltered = catalogRoutines.find(item => item.name === catalog)
  let color;

  const catalogColor = () => {
    if (catalog === "dormirMejor") {
      color = colors.blue
    } else if (catalog === "alimentacion") {
      color = colors.violet
    } else if (catalog === "actividadFisica") {
      color = colors.pink
    } else {
      color = colors.green
    }
  }

  catalogColor()
    return (
    <View style={{alignItems: "center"}}>
      <TouchableOpacity onPress={()=>onHandleAddRoutines(catalogFiltered.elements[0].name)}>
          <ItemButton style={{backgroundColor: color}}>{catalogFiltered.elements[0].name}</ItemButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onHandleAddRoutines(catalogFiltered.elements[1].name)}>
          <ItemButton style={{backgroundColor: color}}>{catalogFiltered.elements[1].name}</ItemButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onHandleAddRoutines(catalogFiltered.elements[2].name)}>
          <ItemButton style={{backgroundColor: color}}>{catalogFiltered.elements[2].name}</ItemButton>
        </TouchableOpacity>
    </View>
  )
}

export default ItemRoutineScreen