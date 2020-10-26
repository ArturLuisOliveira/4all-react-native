import { PRIMARY_COLOR } from '@styles/theme';
import { StyleSheet, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (windowWidth * 70) / 100,
        height: (windowHeight * 60) / 100
    },
    addressContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: PRIMARY_COLOR
    }
});

export default styles;
