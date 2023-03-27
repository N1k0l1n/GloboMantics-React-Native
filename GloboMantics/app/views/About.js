import {StyleSheet, Text, ScrollView, Image} from 'react-native';

//Backtics to use multi-line string
const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in diam massa. Aliquam hendrerit maximus blandit.In cursus libero tristique velit volutpat, sed sagittis quam fermentum. Duis iaculis purus dui, id mollis ex luctus nec. Praesent pretium enim interdum dui semper volutpat.`;

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in diam massa. Aliquam hendrerit maximus blandit.In cursus libero tristique velit volutpat, sed sagittis quam fermentum. Duis iaculis purus dui, id mollis ex luctus nec. Praesent pretium enim interdum dui semper volutpat.`;

const AboutScreen = () => {
  return (
    <ScrollView style={StyleSheet.container}>
      <Image
        style={StyleSheet.pic}
        source={require('../components/img/arch640.jpg')}
      />
      <Text style={StyleSheet.aboutTitle}>Who We are</Text>
      <Text style={StyleSheet.aboutText}>{aboutGlobo}</Text>

      <Image
        style={StyleSheet.pic}
        source={require('../components/img/computer640.jpg')}
      />
       <Text style={StyleSheet.aboutTitle}>Who We do</Text>
      <Text style={StyleSheet.aboutText}>{whatGlobo}</Text>
    </ScrollView>
  );
};


//Styles for About
const styles = StyleSheet.create({
    container:{
        paddingTop:20
    },
    pic:{
        height:300
    },
    aboutTitle:{
        paddingTop:10,
        textAlign:'center'
    },
    aboutText:{
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10
    }
});

export default AboutScreen;
