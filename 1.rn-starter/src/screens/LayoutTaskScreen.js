import React from "react";
import { StyleSheet, View } from "react-native";

// solution 1
const LayoutTaskScreen = (props) => {
    return (
        <View>
            <View style={styles.innerView}>
                <View style={styles.redStyle}/>
                <View style={styles.greenStyle}/>
            </View>
            <View style={styles.blueStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    redStyle: {
        height: 70,
        width: 70,
        backgroundColor: `rgb(255, 0, 0)`,
    },
    greenStyle: {
        height: 70,
        width: 70,
        backgroundColor: `rgb(0, 255, 0)`,
    },
    blueStyle: {
        height: 70,
        width: 70,
        backgroundColor: `rgb(0, 0, 255)`,
        alignSelf: 'center'
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// solution 2
// const LayoutTaskScreen = (props) => {
//     return (
//         <View style={styles.outerView}>
//                 <View style={styles.redStyle}/>
//                 <View style={styles.blueStyle}/>
//                 <View style={styles.greenStyle}/>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     redStyle: {
//         height: 70,
//         width: 70,
//         backgroundColor: `rgb(255, 0, 0)`,
//     },
//     greenStyle: {
//         height: 70,
//         width: 70,
//         backgroundColor: `rgb(0, 255, 0)`,
//     },
//     blueStyle: {
//         height: 70,
//         width: 70,
//         backgroundColor: `rgb(0, 0, 255)`,
//         top: 70
//     },
//     outerView: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// });
export default LayoutTaskScreen;
