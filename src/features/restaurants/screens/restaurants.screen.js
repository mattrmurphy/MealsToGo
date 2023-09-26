import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native'

const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`

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
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  )
}
