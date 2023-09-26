import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Spacer } from '../../../components/spacer/spacer.component'

const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <Container>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Search>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
  )
}
