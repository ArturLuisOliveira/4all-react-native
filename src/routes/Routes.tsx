import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '@constants/screens';
import Initial from '@screens/initial';
import Main from '@screens/main';
import Services from '@screens/services';
import { PRIMARY_COLOR } from '@styles/theme';
import TaskScreenHeader from '@molecules/task_screen_header';
import NavigationBackButton from '@atoms/navigation_back_button';
import NavigationSearchButton from '@atoms/navigation_search_button';

const Stack = createStackNavigator();

function Routes(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={screens.INITIAL}>
                <Stack.Screen name={screens.INITIAL} component={Initial} />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: PRIMARY_COLOR
                        },
                        headerTitle: () => <TaskScreenHeader />,
                        headerBackTitleVisible: false,
                        headerBackImage: () => <NavigationBackButton />,
                        headerRight: () => <NavigationSearchButton />
                    }}
                    name={screens.MAIN}
                    component={Main}
                />
                <Stack.Screen name={screens.SERVICES} component={Services} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
