import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BaseGradient } from "../../src/components/gradients/baseGradient";
import { InputBase } from "../../src/components/inputs/InputBase";

import { styles } from "./styles";
import { Alert, Text, View } from "react-native";
import { ButtonBase } from "../../src/components/buttons/ButtonBase";
import { useState } from "react";
import { removeSpecialCharacters } from "../../src/helpers/removeSpecialCharacters";
import { ButtonFloating } from "../../src/components/buttons/ButtonFloating";

export function SignUpScreen() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handleSubmit = () => {
    // Validation
    if (!name || !email || !password || !passwordCheck) {
      Alert.alert("Sistema", "Por favor, preencha todos os campos.");
      return;
    }

    if (password !== passwordCheck) {
      Alert.alert("Sistema", "As senhas não coincidem.");
      return;
    }

    // Sign up logic here
    Alert.alert("Sistema", `Nome: ${name}\nEmail: ${email}\nSenha: ${password}`);
  };

  return (
    <BaseGradient>
      <View style={styles.container}>
        <KeyboardAwareScrollView style={[styles.keyboardScrollView]}>
          <ButtonFloating iconName="chevron-back" style={{ top: 22, left: 2 }} />
          <ButtonFloating iconName="cog-outline" style={{ top: 22, right: 2 }} />

          <Text style={styles.mainTitle}>Cadastro</Text>
          <View style={styles.header} />

          <Text style={styles.title}>
            Bem-vindo! Estamos felizes por você estar aqui. Para continuar, por favor, preencha os campos abaixo e crie
            sua conta. Isso levará apenas alguns minutos e garantirá que você tenha acesso a todos os nossos recursos.
          </Text>

          <Text style={styles.subTitle}>Informações necessarias</Text>

          <InputBase
            iconName="person-outline"
            placeholder="Digite aqui seu nome"
            value={name}
            onChangeText={(t) => setName(removeSpecialCharacters(t))}
            onclose={() => setName("")}
          />
          <InputBase
            iconName="mail-outline"
            placeholder="Digite aqui seu email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            onclose={() => setEmail("")}
          />
          <InputBase
            iconName="key-outline"
            placeholder="Informe uma senha"
            value={password}
            onChangeText={(t) => setPassword(t)}
            onclose={() => setPassword("")}
          />
          <InputBase
            iconName="key-outline"
            placeholder="Confirmar senha"
            value={passwordCheck}
            onChangeText={(t) => setPasswordCheck(t)}
            onclose={() => setPasswordCheck("")}
          />
          <ButtonBase title="Confirmar" iconName="checkmark" onPress={handleSubmit} />
        </KeyboardAwareScrollView>
      </View>
    </BaseGradient>
  );
}
