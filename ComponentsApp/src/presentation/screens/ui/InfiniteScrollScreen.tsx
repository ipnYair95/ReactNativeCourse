import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { FadeInImage } from '../../components/ui/FadeInImage';
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext';

export const InfiniteScrollScreen = () => {

  const { colors } = useContext<ThemeContextProps>(ThemeContext);

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);

  }

  return (
    <View style={{
      backgroundColor: 'black'
    }}>

      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />


    </View>
  )
}

interface ListItemProps {
  number: number;

}

const ListItem = ({ number }: ListItemProps) => {

  return (
    <FadeInImage uri={`https://picsum.photos/id/${number}/500/400`} style={{
      width: '100%',
      height: 400
    }} /> 
  );

}