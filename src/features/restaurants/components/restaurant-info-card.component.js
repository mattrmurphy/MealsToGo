import React from 'react'
import { Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

import { Spacer } from '../../../components/spacer/spacer.component'
import star from '../../../../assets/star.js'
import open from '../../../../assets/open.js'

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

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
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, i) => {
              return <SvgXml xml={star} width={20} height={20} key={i} />
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
