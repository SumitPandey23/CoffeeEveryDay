import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View , Dimensions, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const index = () => {
  return (
    <SafeAreaProvider>
      <StatusBar  backgroundColor='black' hidden={true} barStyle="light-content"/>
        <View style={styles.container}>
          <Image source={require('../../assets/images/LoginPageLogo.png')}
          style={styles.Logo}
          resizeMode="cover"
          />
          <View style={styles.Footer}>
          <Text style={styles.MainText}>
          Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.FooterText}>The best grain, the finest roast, the powerful flavor.</Text>
          <TouchableOpacity style={styles.SignIn}>
            <Image
            source={require('../../assets/images/ContinueWithGoogleButton.png')}
            style={styles.GoogleLogo}
            />
            <Text style={styles.SignInText}>Continue With Google</Text>
          </TouchableOpacity>
          </View>
        </View>
        
    </SafeAreaProvider>
  )
}

export default index;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'black'
    
  },
  Logo:{
    width:'100%',
    height:'65%',
    borderRadius:150
  },
  MainText:{
    color:'white',
    fontWeight:'600',
    fontSize:40,
    textAlign:'center'
  },
  Footer:{
    height:'40%',
    position:'absolute',
    display:'flex',
    top:0.63*height,
    width:'100%',
    paddingHorizontal:45,
    margin:'auto',
    gap:30,
    alignItems:'center',
  },
  FooterText:{
    fontSize:15,
    color:'gray',
    textAlign:'center',
    paddingHorizontal:20
  },
  SignIn:{
    height:64,
    width:330,
    borderRadius:20,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  SignInText:{
    fontSize:20,
    fontWeight:'600',
    color:'gray'
  },
  GoogleLogo:{
    width:30,
    height:30
  }
});