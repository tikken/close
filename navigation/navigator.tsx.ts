import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import JoinForm from '../screens/JoinForm';
import Room from '../screens/Room';

const Navi = createStackNavigator({
    JoinForm: JoinForm,
    Room: Room
});

export default createAppContainer(Navi);