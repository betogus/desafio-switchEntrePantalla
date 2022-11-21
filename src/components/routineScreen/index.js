import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ItemRoutineScreen from './itemRoutineScreen'
import ItemButton from '../itemButton'
import colors from '../../constants/colors'

const RoutineScreen = ({catalogRoutines, onHandleAddRoutines}) => {

  const [catalog, setCatalog] = useState()
  return (
    <View>
      {!catalog ? 
        <View style={{alignItems: "center"}}>
          <Text>Selecciona el tipo de rutina: </Text>
          <TouchableOpacity onPress={() => setCatalog("dormirMejor")}>
            <ItemButton style={{backgroundColor: colors.blue}}>Dormir mejor</ItemButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCatalog("alimentacion")}>
            <ItemButton style={{backgroundColor: colors.violet}}>Alimentacion</ItemButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCatalog("actividadFisica")}>
          <ItemButton style={{backgroundColor: colors.pink}}>Actividad Fisica</ItemButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCatalog("salud")}>
            <ItemButton style={{backgroundColor: colors.green}}>Salud</ItemButton>
          </TouchableOpacity>  
        </View> 
      :
      <ItemRoutineScreen catalog={catalog} catalogRoutines={catalogRoutines} onHandleAddRoutines={onHandleAddRoutines}/>
      }
    </View>
    

  )
}

export default RoutineScreen