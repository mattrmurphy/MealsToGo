import React from 'react'
import { SvgXml } from 'react-native-svg'

import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import star from '../../../../assets/star.js'
import open from '../../../../assets/open.js'

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
  Icon,
} from './restaurant-info-card.styles'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    ],
    address = '123 Main St.',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, i) => {
              return <SvgXml xml={star} width={20} height={20} key={i} />
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large">
              <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
