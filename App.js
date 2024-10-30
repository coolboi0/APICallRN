import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [data, setData] = useState('');
  const fetchData = async () => {
    try {
      const datas = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await datas.json();
      setData(result.title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text> API Call </Text>
      <Text>{(data)} </Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData();
        }}
      />
      <Button
        title="Clear Data"
        onPress={() => {
          setData();
        }}
      />
    </View>
  );
};
export default App;
