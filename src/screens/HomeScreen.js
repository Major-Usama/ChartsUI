
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image,Dimensions,TouchableWithoutFeedback } from "react-native";
import Navigation from "../navigations/Navigation";

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

export default function HomeScreen({navigation}) {
  const [gallery, useGallery] = useState([
    {
      id: "1",
      image: require("../assets/images/AreaChart.jpeg"),
      title: "Area Chart",
      subTitle: "This is an Area Chart",
     
    },

    {
        id: "2",
        image: require("../assets/images/pie.jpg"),
        title: "Pie Chart",
        subTitle: "This is an Pie Chart,",
       
      },

      {
        id: "3",
        image: require("../assets/images/Donut.jpeg"),
        title: "Donut Chart",
        subTitle: "This is an Donut Chart is that of the result",
       
      },
      {
        id: "4",
        image: require("../assets/images/Donut.jpeg"),
        title: "Donut Chart",
        subTitle: "This is an Pie Chart",
       
      },
  ]);

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={gallery}
        style={{  height: ("20%") }}
        renderItem={({ item }) => {
          return (
            
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('CardClickScreen',
            {
                title:item.title,
                subTitle:item.subTitle
            }
            )}>

            
            <View style={styles.card}>
            
            
            <View style={styles.cardContainer}>
        
            
            <Image  style={styles.image} source={item.image}/>

            <View style={styles.textContainer}>
             
             <View style={styles.titleContainer}>
             <Text style={styles.title}>{item.title}</Text>

             </View>
              
              <View style={{width:130,}}>

             <Text style={styles.description}>{item.subTitle}</Text>
              </View>


            </View>
                

             
            </View>
            </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

    mainWrapper:
    {
        flex:1,
    },


    card:{

        width:WIDTH-60,
        alignSelf:'center',
        height:HEIGHT/4,
        backgroundColor:'skyblue',
        borderRadius:20,
        marginTop:20,
        justifyContent:'center',
        elevation:10
        
    },

    image:
    {
        width:150,
        height:150,
        borderRadius:30,
    
        
        
    

    },
    textContainer:
    {
        marginBottom:('5%')
        
    },

    cardContainer:
    {
      
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
       
        
        
        
    },

    title:
    {
              fontWeight:'bold',
              fontSize:15,
              color:'#fff'
              
              
    },

    description:
    {
        textAlign:'center',
        
        marginTop:'8%',
        fontStyle:'italic'

    },

    titleContainer:
    {
        padding:4,
        elevation:10,
        borderRadius:10,
        backgroundColor:'skyblue',
        justifyContent:'center',
        alignItems:'center'

    }

 
});
