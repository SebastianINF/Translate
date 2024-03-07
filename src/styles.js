import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    color: '#000000',
    borderRadius: 20
  },
  resultText: {
    color: '#FFFFFF',
    marginTop: 20
  }
})