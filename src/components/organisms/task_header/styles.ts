import { PRIMARY_COLOR } from '@styles/theme';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: { marginBottom: 18 },
    image: { width: '100%', height: (windowHeight * 40) / 100 },
    title: { flex: 5, marginTop: 10, textTransform: 'uppercase', color: PRIMARY_COLOR, fontSize: 20 },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: 'white',
        marginTop: -30
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20
    }
});

export default styles;
