import {View, Text, Button, TextInput, StyleSheetm ,TouchableHighlight, StyleSheet,ScrollView, Image} from "react-native"
import React, {useState} from "react"


export default function Registration(){
        const [form_data, setFormdata] = useState({
        name: "",
        age: "",
        classname: "",
        password: "",
        photo: ""
    });

    // 2. Destructure the values out of form_data so they are defined below
    const { name, age, classname, password, photo } = form_data;
    const handleInputChange=(key, value)=>({
        ...prevDefault, [key]:value
    })
    // const handleSubmitRegistation = async()=>{

    //     if(!name && !age && !classname && !password && !photo){
    //         alert("Please fill in all required field")
    //     }
    //     try{
    //         const response = await fetch(URL,{
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 name:name,
    //                 age:age,
    //                 classname:classname,
    //                 password:password,
    //                 photo:photo
    //             }),
    //         });

    //         if(response.ok){
    //             alert("Successfully Registation")
    //             return <Redirect href="Login_page/Login"></Redirect>
    //         }
    //     }catch{
    //         alert("Connection Error")
    //     }
    // }
    return(
        <ScrollView>
        <View style={styles.container}>
          
        
            <View style={styles.input_container}>
                      
                      <Image   source={require("../../../assets/images/download.jpg")} style={styles.Image}></Image>
                      
                <Text style={styles.text}>Registation</Text>

                <TextInput placeholder="Enter your name" placeholderTextColor="#545252" style={styles.text_input} onChangeText={(e)=>handleInputChange(e)} value={name}></TextInput>
                  <TextInput  value={age} placeholder="Enter your Age" placeholderTextColor="#545252" style={styles.text_input} onChangeText={(e)=>
                    handleInputChange(e)
                  }></TextInput>
                  <TextInput placeholder="Enter your ClassName" placeholderTextColor="#545252" style={styles.text_input} 
                  onChangeText={(e)=>handleInputChange(e)} value={classname}
                  ></TextInput>
                  <TextInput placeholder="Enter your Password"  placeholderTextColor="#545252" style={styles.text_input} onChangeText={(e)=>handleInputChange(e)} value={password}></TextInput>
                <TextInput placeholder="Take your photo" placeholderTextColor="#545252" style={styles.text_input} onChangeText={(e)=>handleInputChange(e)} value={photo}></TextInput>
               <TouchableHighlight style={styles.button}  activeOpacity={0.7}>
                <Text style={[{ color: 'white', fontSize: 18 }, { textAlign: 'center' },{alignItems:'center', justifyContent:'center', flex:1, paddingTop:20}]}>Submit</Text>
              
                </TouchableHighlight>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text:{
        flex:3,
        justifyContent:'center',
        alignItem:'center',
        textAlign:'center',
        fontSize:30,
        color: '#f2eef8',
        backgroundColor:'#7b43ea',
        marginTop:10,
        marginLeft:10,
    
        borderRadius:10,
        width: 620
    },
    Image:{
    flex:3,
    alignSelf:'center',
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
     button:{
             backgroundColor: '#7b43ea', 
            width: '30%',
            height: 55,
            borderRadius: 12,        
        
                 
            marginTop: 15,},
    container:{
        flex:1,
        alignItems:'center',
        justifycontent:'center',
        textAlign:'center',
        width:'100%',
        borderRadius:20,
        backgroundColor:"#773eea",
        color:'white'

    },
    input_container:{
     
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        radious:10,
        borderRadius:10,
        width:"50%",
        backgroundColor:'white',
        color:'black',
        padding:20,
        margin:20

    },
    text_input:{
        textAlign:'center',
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        padding:10,
        margin:10,
        borderRadius:10,
        height:10,
        
        backgroundColor:'#d5c7f1',
        width:'100%'

    }

})