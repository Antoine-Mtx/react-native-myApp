// import { NavigationContainer } from "@react-navigation/native";
// import { TabNavigator, Container } from "./src/navigation/TabBar";
// import {
//   SafeAreaProvider,
//   SafeAreaView,
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";
// import { GameProvider } from "./src/provider/GameProvider";

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }}>
//         <GameProvider>
//           <NavigationContainer>
//             <TabNavigator />
//           </NavigationContainer>
//         </GameProvider>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

import React from "react";
import { View, Text, Image, Button } from "react-native";
import ImagePicker from "react-native-image-picker";

export default class App extends React.Component {
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
    });
  };

  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Button title='Choisir votre photo' onPress={this.handleChoosePhoto}/>
      </View>
    );
  }
}
