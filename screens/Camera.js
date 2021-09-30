import React,{useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {View,Text, StyleSheet,Image,Button, Alert} from 'react-native';
import appimg from './appimg';

const Camera=()=>{

    const [image , setImage] = useState(null);
    
    const pickFromCamera =async()=>{
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true
        })

        if(!result.cancelled){
            setImage(result.uri)
        }
    }
    

    const changeimage = appimg[Math.floor(Math.random()* appimg.length)];
                
 return(
        <>
        <View style={styles.main}>
       
            <Button
                title='click to add your image'
                style={styles.bttn}
                onPress={pickFromCamera}
            />

            <Image source={{uri:image}}   style={{width:200 ,height:200 , marginTop:30 , marginBottom:30 }}/>
           
            {image === null ?
            (Alert.alert('add your image and see hows you looks like ')):
            (<Image source= {changeimage} style={styles.img}/>)}

            {image === null ?
            (null) : 
            (<Button title='try again' onPress={()=>{
                setImage(null);
                
                
            }}/>)}
            
            
            

           

         </View>

        </>
    );

}

const styles=StyleSheet.create({


    main:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },

    img:{
        height:200,
        width:200,
      
     
      }
    

    
})

export default Camera;











