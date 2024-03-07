import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { languages } from './src/languages'
import { styles } from './src/styles'
import axios from 'axios'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('es')

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: inputText,
            target: selectedLanguage,
            key: 'AIzaSyALbeR88EpSd1IMmOJ3iqcuFxlyj7x6j1Q'
          }
        }
      )

      const translation = response.data.data.translations[0].translatedText
      setTranslatedText(translation)
    } catch (error) {
      console.error('Error al traducir:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detectar Idioma</Text>
      <TextInput
        style={styles.input}
        placeholder='Introduce la palabra o frase...'
        value={inputText}
        onChangeText={text => setInputText(text)}
      />

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        {languages.map(language => (
          <Picker.Item
            key={language.abreviatura}
            label={language.nombre}
            value={language.abreviatura}
          />
        ))}
      </Picker>

      <Text style={styles.title}>Texto Traducido:</Text>
      <Text style={styles.resultText}>{translatedText}</Text>
      <Button title='Translate' onPress={translateText} />
    </View>
  )
}
