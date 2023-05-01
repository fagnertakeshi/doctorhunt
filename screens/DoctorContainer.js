import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorCard = ({ doctor }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: doctor.photo }} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <Text style={styles.experience}>{doctor.experience} anos de experiência</Text>
        <Text style={styles.availability}>Próxima disponibilidade: {doctor.availability}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DoctorContainer = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (text) => {
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Pesquisar médicos"
        onChangeText={handleSearch}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  search: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    marginBottom: 5,
  },
  experience: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  availability: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default DoctorContainer;