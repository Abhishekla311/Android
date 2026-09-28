
import React, {useState, useEffect} from "react"
import {View, Text, Image, ActivityIndicator, StyleSheet} from "react-native"
import Registration from "./Login_page/Registration"; 

const Index  =()=>{
  const[isSplash, setSplash] = useState(true)
  useEffect(()=>{
    const splashTimer = setTimeout(()=>{
      setSplash(false)

    }, 2000);
    return ()=>clearTimeout(splashTimer)
  }, [])
  if(isSplash){
return(
    <View style={styles.splashContainer}>
      <Text style={styles.splash_title}>Student Data Analysis</Text>
     <Image source={require("../../assets/images/download (3).jpg")}  style={styles.splash}></Image>
    <ActivityIndicator size="large" color="#ffffff" style={styles.loader} ></ActivityIndicator>

    </View>
  )
  }
  return <Registration/>
  
}

const styles = StyleSheet.create({
  splashContainer:{
   flex: 1,
    backgroundColor: "#7b43ea", // Your primary app signature background color
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  splash_title:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
    letterSpacing: 0.5,
    textAlign: "center",
  },
loader: {
    marginTop: 40,
  },

  splash: {
    width: 600,
    height: 600,
    borderRadius: 100, // Makes it a smooth circular graphic
    resizeMode: "cover",
  },
})

export default Index;