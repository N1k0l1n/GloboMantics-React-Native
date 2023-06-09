import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/views/Home';
import AboutScreen from './app/views/About';
import RegisterScreen from './app/views/Register';
import LoginScreen from './app/views/Login';
import GloboHeader from './app/components/Header';
import Blog from './app/views/Blog';
import BlogDetail from './app/views/BlogDetail';
import QuizFinish from './app/views/QuizFinish';
import Quiz from './app/views/Quiz';
import Video from './app/views/Video';
import VideoDetail from './app/views/VideoDetail';

//returns an object with 2 properties (screen, navigator)
const Stack = createNativeStackNavigator();

//StackNavigator allows transitions between the screens

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetail}
          options={{title: 'Watch Lesson'}}
        />

        <Stack.Screen
          name="Videos"
          component={Video}
          options={{title: 'Video Lessons'}}
        />
        <Stack.Screen
          name="QuizFinish"
          component={QuizFinish}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Quiz" component={Quiz} options={{title: ''}} />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{title: 'Globo Blog'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'About Us'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => <GloboHeader />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
