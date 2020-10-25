import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    image: { width: '100%', height: (windowHeight * 40) / 100 },
    title: { textTransform: 'uppercase', color: 'orange', fontSize: 20 },
    iconContainer: {
        display: 'flex',
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
