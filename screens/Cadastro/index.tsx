import React from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { estilos } from "./styles";

const SignUpScreen = () => {
  return (
    <View style={estilos.container}>
      {/* Rounded Header */}
      <View style={estilos.roundedHeader}>
        <View style={estilos.headerContent}>
          <Text style={estilos.backButton}>← Back</Text>
          <TouchableOpacity style={estilos.iconButton}>
            <Text style={estilos.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
        <Text style={estilos.title}>Sign Up</Text>
      </View>

      <View style={{ height: 120 }}></View>

      {/* Form */}
      <View style={estilos.form}>
        <Text style={estilos.title2}>Informações de cadastro</Text>
        <TextInput style={estilos.input} placeholder="Informe seu email" placeholderTextColor="#C4C4C4" />
        <TextInput style={estilos.input} placeholder="Senha" placeholderTextColor="#C4C4C4" secureTextEntry />
        <TextInput style={estilos.input} placeholder="Confirmar senha" placeholderTextColor="#C4C4C4" secureTextEntry />
        <TextInput style={estilos.input} placeholder="Nome completo" placeholderTextColor="#C4C4C4" />

        {/* Sign Up Button */}
        <TouchableOpacity style={estilos.signUpButton}>
          <Text style={estilos.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { SignUpScreen };
