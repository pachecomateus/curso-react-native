import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        padding: 12,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
});