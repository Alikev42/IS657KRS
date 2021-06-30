import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create( {
    container: {
        flex: 1, 
        flexDirection: "column",
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
      borderWidth: 5,
      borderColor: "#000000",
      borderStyle: "solid"
    },

    headerText: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 32
    },

    colTopLine: {
        alignItems: "flex-start",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 20
    },
    
    actionBox: {
        flexDirection: "column",
        alignItems: "space-between",
        borderWidth: 3,
        borderColor: "#000000",
        borderStyle: "solid",
        margin: 7
    },

    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    userInput: {
        backgroundColor: "#efefef",
        fontStyle: "italic",
        fontSize: 20
    },

    item: {
        textColor: "#000000",
        backgroundColor: "#ffffff"
    },

    text: {
        color: "#000000"
    },

    checkList: {
        flexDirection: "row"
    }

});
