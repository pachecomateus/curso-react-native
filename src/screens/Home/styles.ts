import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 24,
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 6,
      color: '#FFFFFF',
      padding: 12,
      fontSize: 16,
      marginRight: 16,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 6,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    }
  });