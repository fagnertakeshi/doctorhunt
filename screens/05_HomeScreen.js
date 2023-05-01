import React from 'react';
import {
  FlatList,
  Dimensions,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const doctorsData = [
  {
    id: '1',
    name: 'Dr. José Silva',
    specialty: 'Cardiologista',
    rating: 2.8,
    image:require('../assets/doctor1.jpg'),
  },
  {
    id: '2',
    name: 'Dra. Maria Oliveira',
    specialty: 'Dermatologista',
    rating: 4.5,
     image:require('../assets/doctor2.jpg'),
  },
  {
    id: '3',
    name: 'Dr. João Santos',
    specialty: 'Oftalmologista',
    rating: 4.2,
     image:require('../assets/doctor3.jpg'),
  },
];
const DoctorItem = ({ doctor }) => (
  <View style={styles.itemContainer}>
    <Image source={doctor.image} style={styles.doctorImage} />
    <View style={styles.doctorInfo}>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{doctor.rating.toFixed(1)}</Text>
        {/* Renderize as estrelas de acordo com a avaliação */}
        <Text>⭐️⭐️⭐️⭐️</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  const renderDoctorItem = ({ item }) => <DoctorItem doctor={item} />;

  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.stasber}>
        <Text style={styles.time}>10:00</Text>
      </View>
      <View style={styles.search}>
        <Text>Encontre seu doutor</Text>
        <View style={styles.inputcontainer}>
          <TextInput style={styles.txtInputSearch} />
        </View>
      </View>
      <View style={styles.profile}>
        <Text>Ola Fagner</Text>
      </View>
        <View style={styles.container}>
      <FlatList
        data={doctorsData}
        renderItem={renderDoctorItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
      <View style={styles.livedoctors}>
        <Text>Profissionais ao vivo</Text>
      </View>
      
      <View style={styles.tab}></View>
      <View style={styles.populardoctor}>
      
      </View>
      <View style={styles.featuredoctor}>
      
      </View>
      <View style={styles.bg}></View>
      <View style={styles.menu}></View>
    </SafeAreaView>
  );
};
  
const styles = StyleSheet.create({
  stasber: {
    width: 349,
    height: 18,
    left: 6,
    top: 11,
  },
  search:{
    display: 'flex',
    justifycontent: 'center',
    height:100,
    borderWidth:1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  inputcontainer:{
      alignItems:'center'
    },
  fundo:{
    flex:1,
    background: '#E5E5E5'
  },
  time:{
    width: 54,
    height: 18,
    left: 6,
    fontfamily: 'Rubik',
    fontstyle: 'normal',
    fontweight: 500,
    fontsize: 14,
    lineheight: 17,
    textalign: 'center',
    letterspacing: -0.3,
    color: '#FFFFFF',
  },
  txtInputSearch:{
    padding: 10,
    justifycontent: 'right',
    alignItems: 'center',
    width: 200,
    textAlign: 'left',
    height: 20,
    background: '#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 4,
  },
});
export default HomeScreen;
