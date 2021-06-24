// Kevin R. Salger
// IS 657, Summer 2021

// https://github.com/Alikev42/IS657KRS.git
// https://snack.expo.io/@alikev42/github.com-alikev42-is657krs

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, TextInput, View, FlatList, Button } from 'react-native';
import styles from "./Styles.js";
import RAList, { maxNum } from "./RAList.js"; 

///////////////
// Functions //
///////////////
function renderItem ( {item} ) {
  return <Text>{`${item.num}  |  ${item.brand} ${item.product}`}</Text>
};  /*  The term "item" is required as the receiving argument. It cannot be
        any other word.  How stupid.  A programmer cannot then use terms 
        that make sense to the program.
    */

// Click ADD TASK button to add a new task
// Need to create a new array entry, then apply brand & product to array entry
  // Determine largest "num" in array, maybe with a (maxNum, setmaxNum) state?
  // Write new array element with maxNum+1, & Brand, Product from user
  // Update maxNum
  // Re-render the list on the display
function addTask({data}, brand, product) {
//  const [brand, setBrand] = useState("");
//  const [product, setProduct] = useState("");
  const [maxNum, setMaxNum] = useState(maxNum);
  const newElement = {num: {maxNum}, brand: brand, product: product}; 
  // this.setState( {data: [...this.state.data, newElement]} );

  // findMax = {()=>setMaxNum(maxNum)};
  return /*(
    
    <View>
      <TextInput 
        style={styles.userInput}
        placeholder="Brand:"
        onChangeText={()=>setBrand(brand)}
        defaultValue={brand}>
      </TextInput>
       
      
      <TextInput 
        style={styles.userInput}
        placeholder="Product:"
        onChangeText={()=>setProduct(product)} 
        defaultValue={product}> 
      </TextInput>
    </View>
  );*/
}

// Click on a task to apply strikethrough text, indicating the task is finished
  // I'm not remotely sure how to do this
function finTask() {
  return 
}

// Click DELETE TASK button to delete an existing task
  // Ask user which task to delete, by "num"
  // Delete array entry using "num"
  // Re-render the list on the display
function delTask(num) {
  return 
}

///////////////
// Main Code //
///////////////
// Header //
// FlatList: Status, RA#, Product //
// Add Task //
// Delete Task //
export default function App() {
  const [num, setNum] = useState(null);
  const [brand, setBrand] = useState(null);
  const [product, setProduct] = useState(null);
  const [data, setData] = useState(RAList);
  const [maxNum, setMaxNum] = useState(maxNum);

  function newElement ( maxNum, brand, product ) {
    let newElem = {num: maxNum, brand: brand, product: product}; // Maybe these need to be setMaxNum, setBrand, setProduct
    let newData = data.concat(newElem);
    setData(newData)
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
        />
      </View>
      

      <View style={styles.actionBox}>
        <TextInput 
          style={styles.userInput}
          placeholder="Brand:"
          onChangeText={()=>setBrand(brand)}
          defaultValue={brand}>
        </TextInput>
      
        <TextInput 
          style={styles.userInput}
          placeholder="Product:"
          onChangeText={()=>setProduct(product)} 
          defaultValue={product}> 
        </TextInput>

        <Button
          onPress={newElement(maxNum, brand, product)}
          title="Add Task"
          color="#994466"
        />
      </View>  


      <View style={styles.actionBox}>
        <TextInput 
          style={styles.userInput}
          placeholder="RA#:"
          onChangeText={()=>setNum(num)}
          defaultValue={num}>
        </TextInput>
        
        <Button
          onPress={delTask(num)}
          title="Delete Task"
          color="#994466" 
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}
// newElement = {maxNum, brand, product}}
//        this.setData( {data: [...this.state.data, {maxNum, brand, product}]} );
//onPress={addTask({data}, brand, product)}}