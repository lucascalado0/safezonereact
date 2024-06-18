import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import Map from '../screens/Map';
import Formulario from '../screens/Formulario';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Mapa"
                component={Map}
                options={{
                    tabBarIcon: () => <Feather name="map" color="orange" size={30}/>,
                    tabBarLabel: 'Mapa'
                }}
            />

            <Tab.Screen
                name="Formulario"
                component={Formulario}  
                options={{
                    tabBarIcon: () => <AntDesign name="form" size={30} color="orange" />,
                    tabBarLabel: 'Formulário'
                }}  
            />
        </Tab.Navigator>
    )
}