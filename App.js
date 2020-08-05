import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({
    isLoading: true,
    items: [],
    page: 0,
  });
  const itemPerPage = 15;

  useEffect(() => {
    fetchData(0);
  });

  const fetchData = (page) => {
    return fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${itemPerPage}`,
    )
      .then((response) => response.json())
      .then((json) =>
        setData({
          isLoading: false,
          items: [],
          page: data.page++,
        }),
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({_id}, index) => _id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.trips}
            </Text>
          )}
        />
      )}
    </View>
  );
};
