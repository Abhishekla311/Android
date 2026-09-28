import { Tabs } from 'expo-router';

export default function LoginLayout() {
  return (
<Tabs>

  <Tabs.Screen name="Login" options={{
    title:"Login Account",
    headerShown:false,
    headerStyle:{backgroundColor:"#7b43ea"},
    headerTintColor:"#ffff"
  }}/>
  <Tabs.Screen name="Registration"></Tabs.Screen>
  <Tabs.Screen name="LoginWithPhoto"></Tabs.Screen>

</Tabs>
  );
}
