import { PRIMARY_COLOR } from '@styles/theme';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: { display: 'flex', padding: 20 },
    element: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: PRIMARY_COLOR,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    avatar: { width: 50, height: 50, borderRadius: 25 },
    text: { color: PRIMARY_COLOR, fontSize: 18, fontWeight: 'bold' }
});

export default styles;
