import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create( {
    container: {
        flex: 1, 
        flexDirection: "column",
        // flexWrap: "wrap",
        backgroundColor: "#dddddd",
        alignItems: "center",
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#770088",
        borderWidth: 5,
        ...Platform.select (
            {
                ios: {paddingTop: 20},
                android: {paddingTop: StatusBar.currentHeight}
            }
        )
    },
    
    headerBox: {
      backgroundColor: "#aa5577",
      flexDirection: "column",
      width: "stretch",
      alignItems: "center",
      justifyContent: "center", 
      margin: 20,
      borderWidth: 3,
      borderColor: "#000000",
      borderStyle: "solid"
    },

    headerText: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 32
    },

    colTopLine: {
        //justifyContent: "flex-start",
        alignItems: "flex-start",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 20
    },
    
    actionBox: {
        flexDirection: "column",
        alignItems: "space-between",
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "solid"
    },

    userInput: {
        fontStyle: "italic"
    },

    /*
    separator: {
        marginVertical: 8,
        borderBottomColor: "#737373",
        borderBottomWidth: 12
    }
    */
});
