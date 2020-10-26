import { useNavigation } from '@react-navigation/native';

import { SERVICES } from '@constants/screens';

const useServicesScreen = (): (() => void) => {
    const navigation = useNavigation();
    const navigateToServices = () => {
        navigation.navigate(SERVICES);
    };
    return navigateToServices;
};

export default useServicesScreen;
