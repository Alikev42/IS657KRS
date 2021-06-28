// Kevin R. Salger
// IS 657, Summer 2021

// https://github.com/Alikev42/IS657KRS.git
// https://snack.expo.io/@alikev42/github.com-alikev42-is657krs

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, TextInput, View, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from "./Styles.js";
import RAList from "./RAList.js"; 

const Item = ( {item, onPress, backgroundColor, textColor} ) => (
              <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
                <Text style={[styles.text, textColor]}>{`${item.num}  |  ${item.brand} ${item.product}`}</Text>
              </TouchableOpacity>
            )


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
  const [data, setData] = useState(RAList);  // Sets initial value of data array
  const [selectedItem, setSelItem] = useState(null);

  function renderItem ( {item} ) {
    const bkgdColor = item === selectedItem ? "#000000" : "#dddddd";
    const color = item === selectedItem ? "#686868" : "#000000";
    return (
    <Item item={item} 
          onPress={()=>setSelItem(item)}
          backgroundColor={ {bkgdColor} }
          textColor={ {color} } />
    )
  };  /*  The term "item" is required as the receiving argument. It cannot be
          any other word.  How stupid.  A programmer cannot then use terms 
          that make sense to the program.  */


  // Click ADD TASK button to add a new task
  function addTask ( maxNum, brand, product ) {
    let newElem = {num: maxNum, brand: brand, product: product};
    let newData = data.concat([newElem]);
    setData(newData);
    return
    //  Would also like to restore the textInput fields, 
  }

  // Not sure clearFields is needed
  function clearFields() {
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
          defaultValue={RAnum}>
        </TextInput>

        <TextInput 
          style={styles.userInput}
          placeholder="Brand:"
          onChangeText={(repairBrand)=>setBrand(repairBrand)}
          defaultValue={brand}>
        </TextInput>
      
        <TextInput 
          style={styles.userInput}
          placeholder="Product:"
          onChangeText={(repairProd)=>setProduct(repairProd)} 
          defaultValue={product}> 
        </TextInput>

        <View style={styles.actionRow}>
          <Button
            onPress={()=>addTask(RAnum, brand, product)}
            title="Add Task"
            color="#994466"

          />
          <Button
            onPress={()=>clearFields()}
            title="Clear Fields"
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