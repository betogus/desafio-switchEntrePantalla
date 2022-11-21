import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { Header, ItemButton, RoutineScreen, ListRoutines } from './components';
import colors from './constants/colors';
import { useFonts } from 'expo-font'

   
export default function App() {

  const title = "Rutinas Diarias"


  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  })


  const [routines, setRoutines] = useState([])
  const [routineScreen, setRoutineScreen] = useState(false)
  const onHandleRoutineScreen = () => setRoutineScreen(!routineScreen)

  const onHandleAddRoutines = (routineName) => {
    let findRoutine = routines.find(routine => routine.name === routineName)
    if (findRoutine ) {
      Alert.alert("ya se encuentra agregada en su lista")
    } else {
      setRoutines((prevRoutines) => [...prevRoutines, {name: routineName}]);
      onHandleRoutineScreen()
    }
  }

  const onHandleEraseRoutine = (routineToErase) => {
    const listRoutines = routines.filter(routine => routine.name!==routineToErase.name)
    setRoutines(listRoutines);

  }


  const catalogRoutines = [
    {
      name: "dormirMejor",
      elements: [
        {name: "lee un libro"}, {name: "evita comer abundante"}, {name: "medita"}
      ]
    },
    {
      name: "actividadFisica",
      elements: [
        {name: "sal a correr a primera hora"}, {name: "haz una hora de ejercicio por día"}, {name: "no te olvides de elongar en la mañana"}
      ]
    },
    {
    name: "alimentacion",
    elements: [
      {name: "come como snack una fruta"}, {name: "toma agua al levantarte"}, {name: "bebe té en el desayuno"}
      ]
    },
    {
    name: "salud",
    elements: [
      {name: "juega"}, {name: "juntate con amigos"}, {name: "sal a pasear"}
      ]
    }
  ]
  
  if (!loaded) {
    return(
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color={colors.red}/>
    </View>
    )
  }

  return (
    <View style={styles.container}>
     <Header title={title} onHandleRoutineScreen={onHandleRoutineScreen} routineScreen={routineScreen}/>
      {!routineScreen ? 

      (
        <View>
          <Text style={{textAlign: "center"}}>Tus rutinas diarias: </Text>
            {routines[0] ? <ListRoutines routines={routines} onHandleEraseRoutine={onHandleEraseRoutine}/> : <Text style={{textAlign: "center"}}>No hay rutinas</Text>}
        
        <TouchableOpacity style={{justifyContent: "center", width: "100%", alignItems: "center"}} onPress={onHandleRoutineScreen}>
          <ItemButton style={{backgroundColor: colors.orange}}>Añadir una nueva rutina</ItemButton>
        </TouchableOpacity>
       
        </View>
      ) : <RoutineScreen catalogRoutines={catalogRoutines} routines={routines} onHandleAddRoutines={onHandleAddRoutines}  />}
    </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  }
});
