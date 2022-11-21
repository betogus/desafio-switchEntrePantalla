import React from 'react'
import { FlatList } from 'react-native'
import MyRoutine from '../routine'


const ListRoutines = ({routines, onHandleEraseRoutine}) => {
  return (
 <FlatList 
    data={routines}
     renderItem={data =>    
     <MyRoutine
      item={data.item}
      onHandleEraseRoutine={onHandleEraseRoutine}
      />} 
     keyExtractor={item => item.name}
  />
   
  )
}

export default ListRoutines