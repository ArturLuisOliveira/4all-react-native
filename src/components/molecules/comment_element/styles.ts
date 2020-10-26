import { PRIMARY_COLOR } from '@styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 15,
        marginLeft: 15
    },
    avatarContainer: { flex: 1 },
    textContainer: { flex: 5, flexDirection: 'column' },
    avatar: { width: 50, height: 50, borderRadius: 25 },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: { color: PRIMARY_COLOR },
    name: { fontWeight: 'bold' }
});

export default styles;
