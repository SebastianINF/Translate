import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  main: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#009c8c',
    textDecorationStyle: 'solid',
    marginBottom: 20
  },
  container: {
    flex: 1,
    paddingTop: 100,
    gap: 20,
    backgroundColor: '#242424',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    color: '#000000'
  },
  resultText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  }
})
