import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    mapIcon: { marginRight: 10 },
    searchIcon: { marginLeft: 20 },
    text: { color: 'white', fontSize: 10 }
});

export default styles;
