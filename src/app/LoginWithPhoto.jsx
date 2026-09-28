import {View, Text, TextInput,Button, TouchableOpacity} from "react-native"
import React, {useState} from "react"
import * as ImagePicker from "expo-image-picker";

export default LoginWithPhoto =()=>{
    const[formState, setFormState] = useState({
        imageUrl:null,
        loading:false
    });
    const updateField = (key, value)=>{
        setFormState((prevState)=>({
            ...prevState, [key]:value
        }));
    };
  const takePhoto = async()=>{
    const permissionResult = await ImagePicker.requestCameraPermissionAsync()

    if(permissionResult.granted===false){
        alert("Permission Denied you need to camera allow access")
    }
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes:['images'],
        allowsEditing:True,
        aspect:[1,1],
        quality:0.7
    });
    if(!result.canceled && result.assets && result.assets.length> 0){
        updateField("imageURI", result.assets[0].uri)
    }
  }


    const LoginImage = async()=>{
        const{imageUrl, loading} = formState;
        if(!imageUrl){
            alert("Please Capture your image")
        }
        updateField("loading", true)
        const formData = new FormData();
        formData.append("username", name)
        formData.append("file", {
            uri:imageUrl,
            type:`image/jpeg`
        })

    
        try{
            const response = await fetch(URL, {
                method:POST,
                headers:{
                    "Content-Type":"multipart/from-data"
                },
                body:formData
            })
            if(response.ok){
                alert("Successfully Login ")
            return <Redirect href="/home"></Redirect>
            }else{
                alert("Verification Failed")
            }
        }catch{
            alert("Connection Error")
        }finally{
            updateField("loading", false)

        }

    }
 return(
    <View style={styles.container}>
        <Text style={styles.title} >Face Identity Login </Text>

      {
        formData.imageUrl &&(<View style={styles.cameraButton}>  
        
        <Image source={{uri:formState.imageUrl}} style={styles.previewImage}></Image>
         </View>)
      }




      <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
      <Text style={styles.cameraButton}>
        {formState.imageUrl?"Retake Image" : "Open Camera and Snap"}

      </Text>

      </TouchableOpacity>



      <TouchableOpacity style={[styles.submitButton, (! formState.imageUrl) && styles.disabledButton]} onPress={LoginWithPhoto} disabled={formState.loading|| !formState.imageUrl}> 
        <Text style={styles.submitButton}>  
            {formData.loading ?"Analyzing Faces...":"Source Login"}
        </Text>



      </TouchableOpacity>
    </View>
 )

}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#f5f3ff" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 25, color: "#7b43ea" },
    input: { backgroundColor: "white", padding: 14, marginBottom: 15, borderRadius: 10, borderWidth: 1, borderColor: "#e2d6ff", fontSize: 16 },
    cameraButton: { backgroundColor: "#ffffff", padding: 14, borderRadius: 10, alignItems: "center", borderWidth: 1.5, borderColor: "#7b43ea", marginBottom: 15 },
    cameraButtonText: { color: "#7b43ea", fontWeight: "bold", fontSize: 16 },
    submitButton: { backgroundColor: "#7b43ea", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10, elevation: 3 },
    disabledButton: { backgroundColor: "#cbb4f9" },
    submitButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
    previewContainer: { alignItems: "center", marginBottom: 15 },
    previewImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: "#7b43ea" }
});