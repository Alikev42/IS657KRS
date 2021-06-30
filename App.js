// Kevin R. Salger
// IS 657, Summer 2021

// https://github.com/Alikev42/IS657KRS.git
// https://snack.expo.io/@alikev42/github.com-alikev42-is657krs

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, TextInput, View, FlatList, 
         Button, TouchableOpacity, CheckBox } from 'react-native';
import styles from "./Styles.js";
import RAList from "./RAList.js"; 




///////////////
// Main Code //
///////////////
// Header //
// RA# | Brand Product //
// Add Task //

export default function App() {
  const [RAnum, setRAnum] = useState(null);
  const [brand, setBrand] = useState(null);
  const [product, setProduct] = useState(null);
  const [done, setDone] = useState(false);
  const [data, setData] = useState(RAList);
  const [selectedItem, setSelItem] = useState(null);
  //const [isSelected, setSelection] = useState(false);

  function renderItem ( {item} ) {
    const backgroundColor = item === selectedItem ? "#111111" : "#eeeeee"; 
    const color = item === selectedItem ? "#686868" : "#000000";
    
    const Item = ( {item, onPress, backgroundColor, textColor} ) => (
      //const [isSelected, setSelection] = useState(false);        
                <View style={styles.checkList}> 
                  {/* <CheckBox value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}>  
                  </CheckBox> */}
                  <CheckBox></CheckBox>
                  
                  <TouchableOpacity onPress={onPress} 
                                    style={[styles.item, backgroundColor]}> 
                    <Text style={[styles.text, textColor]}>
                      {`${item.num}  |  ${item.brand} ${item.product}`}
                    </Text>
                  </TouchableOpacity>
                </View>
                );

    return (
      <Item item={item} 
            onPress={ ()=>{setSelItem(item)} }
            backgroundColor={ {backgroundColor} }
            textColor={ {color} } 
      />
    )
  }; 


  // Click ADD TASK button to add a new task
  function addTask ( repairNum, brand, product ) {
    let newElem = {num: repairNum, brand: brand, product: product};
    let newData = data.concat([newElem]);
    setData(newData);
    return
  }

 
  return (
    <View style={styles.container}>


      <View style={styles.headerBox}>
        <Text style={styles.headerText}>
          Repairs To-Do
        </Text>
      </View>


      <View style={styles.colTopLine}>
        RA # | Brand | Product
      </View>


      <View>
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={taskList => taskList.num}
          extraData={selectedItem} 
        />
      </View>

      
      <View style={styles.actionBox}>
      <TextInput 
          style={styles.userInput}
          placeholder="RA#:"
          onChangeText={(repairNum)=>setRAnum(repairNum)}
          value={RAnum}>
        </TextInput>

        <TextInput 
          style={styles.userInput}
          placeholder="Brand:"
          onChangeText={(repairBrand)=>setBrand(repairBrand)}
          value={brand}>
        </TextInput>
      
        <TextInput 
          style={styles.userInput}
          placeholder="Product:"
          onChangeText={(repairProd)=>setProduct(repairProd)} 
          value={product}> 
        </TextInput>

        <View style={styles.actionRow}>
          <Button
            onPress={()=>addTask(RAnum, brand, product)}
            title="Add Task"
            color="#994466"
          />
        </View>
      </View>  

      <StatusBar style="auto" />
    </View>
  );
}


/*
data entry validation?  Cannot have repeated RA# values.
  if (data.find(elem=>elem===repairNum)) {window.alert("Invalid--use unique number.")}
  ////////////////////////////////////////////

      <View style={styles.actionBox}>
        <TextInput 
          style={styles.userInput}
          placeholder="RA#:"
          //onChangeText={(num)=>setNum(num)}
          defaultValue={num}>
        </TextInput>
        
        <View style={styles.actionRow}>
          <Button
            onPress={delTask()}
            title="Delete Task"
            color="#994466" 
          />
          <Button
            onPress={()=>clearFields()}
            title="Clear Field"
            color="#994466"
          />
        </View>
      </View>
*/