import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const itemPerPage = 30;

  useEffect(() => {
    setLoading(true);
    const apiURL = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${itemPerPage}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson.data));
        setLoading(false);
      });

    return () => {};
  }, [page]);

  const renderRow = ({index, item}) => {
    return (
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>{`${index}) ` + item.name}</Text>
      </View>
    );
  };

  const renderFooter = () => {
    // ActivityIndicator Displays a circular loading indicator.
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator color="red" size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    backgroundColor: '#e1e1e1',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default App;
