import React from 'react'
import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

const RestaurantCard = styled(Card)`
  background-color: white;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`

const Title = styled.Text`
  padding: 16px;
`
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    ],
    address = '123 Main St.',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}
