import { Button } from "expo-router/build/react-navigation"
import React , {useState} from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity , SafeAreaView, Alert , Image, TouchableHighlight} from "react-native"
import { Redirect } from "expo-router";

export default function Login(){
    const[name, setName] = useState()
    const[password, setPassword] = useState()
    // const LoginSumit = async()=>{
    //     if(!name && !password){
    //         alert("Enter your password and name ")
    //         return
    //     }
    //     try{
    //         const response = await fetch(,{
    //             headers:{
    //                 "Content-Type":"application/json",
    //             },
    //             body:JSON.Stringify({
    //                 name:name,
    //                 password:password
    //             }),
    //         });
    //         const result = response.json()
    //         if(response.ok){
    //             alert("Loging Successfully")
    //             return <Redirect href="/home"></Redirect>

    //         }else{
    //             alert("Login Failed")
    //         }

    //   }catch(e){
    //     alert("Error connection ")

    //   }
    // }
    return(
        <View style={styles.container}>
            <View style={styles.image_container}>
            <Image 
                    source={require("../../../assets/images/download (2).jpg")} 
                   
                />

            </View>

          
            <View style={styles.text_input_container}>
              <Text style={styles.login}>Login Account</Text>
            <TextInput placeholder="Enter your name" onChangeText={(e)=>setName(e)} value={name} style={styles.text_input} ></TextInput>  
             <TextInput placeholder="Enter your password" onChangeText={(e)=>setPassword(e)} value={password} style={styles.text_input}></TextInput> 
             <TouchableHighlight style={styles.button}>
           <Text style={[{ color: 'white', fontSize: 18 }, { textAlign: 'center' },{alignItems:'center', justifyContent:'center', flex:1, paddingTop:20}]}>Submit</Text>

            </TouchableHighlight>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color: '#a780f6',
    },
    text_input_container:{
flex:1,
justifyContent:'center',
alignItems:'center',
marginBottom:30
    },
    image_container:{
        flex:2,
        resizeMode:"cover",
        alignItems:'center',
        justifyContent:'center'},
    image:{
        width:150,
        height:150,
        borderRadius:75,
        resizeMode:'contain'

    },

    login:{
        
        textAlign:'center',
        fontSize:20,
        color: '#f7f7f8',
        backgroundColor:'#5e18f4',
        height:100,
        padding:20,
        width:600,
        fontWeight:'bold',
        elevation:10,
        marginTop:10,
        borderRadius:30
        
    },
    text_input:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color: '#f7f7f8',
        backgroundColor:'#5e18f4',
        height:100,
        padding:20,
        width:600,
        fontWeight:'bold',
        elevation:10,
        marginTop:10,
        borderRadius:30
    },
    button:{
         backgroundColor: '#7b43ea', 
        width: '30%',
        height: 55,
        borderRadius: 12,         
             
        marginTop: 15,

        elevation: 5,
        shadowColor: '#7b43ea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    }
})