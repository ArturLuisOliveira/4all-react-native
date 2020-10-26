import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import * as screens from '@constants/screens';
import Initial from '@screens/initial';
import Main from '@screens/main';
import Services from '@screens/services';

const Stack = createStackNavigator();

function Routes(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="INITIAL">
                <Stack.Screen name={screens.INITIAL} component={Initial} />
                <Stack.Screen name={screens.MAIN} component={Main} />
                <Stack.Screen name={screens.SERVICES} component={Services} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
