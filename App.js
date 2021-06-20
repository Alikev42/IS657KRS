import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, TextInput, View, FlatList, Button } from 'react-native';
import styles from "./Styles.js";
import RAList from "./RAList.js";

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
function addTask(brand, product) {
//  const [brand, setBrand] = useState("");
//  const [product, setProduct] = useState("");

  return (
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
  );
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
          data={RAList}
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
          onPress={addTask(brand, product)}
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
