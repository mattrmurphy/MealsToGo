import React, { useContext, useState } from 'react'
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Searchbar, ActivityIndicator } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { colors } from '../../../infrastructure/theme/colors'

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

const Loader = styled(ActivityIndicator).attrs({
  animating: true,
  size: 'large',
  color: colors.brand.primary,
})`
  flex: 1;
`

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

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
      {isLoading ? (
        <Loader />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </Container>
  )
}
