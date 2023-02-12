import React, { ReactElement, FC } from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/ContactDetails.style'

import { ContactDetailsProps } from './ContactDetails.types'
import { mapStyles } from './mapStyles'

const ContactDetails: FC<ContactDetailsProps> = ({ contactDetails }: ContactDetailsProps): ReactElement => {
  return (
    <Styled.ContactDetails>
      <Styled.Map>
        <LoadScript googleMapsApiKey='AIzaSyCxOwGupzNX4Ad3X5kZHbcx3QK6_zyXdu4'>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
            }}
            center={{
              lat: contactDetails.officeMap.latitude,
              lng: contactDetails.officeMap.longitude,
            }}
            zoom={16}
            options={{
              styles: mapStyles,
            }}
          >
            <Marker
              position={{
                lat: contactDetails.officeMap.latitude,
                lng: contactDetails.officeMap.longitude,
              }}
              icon='/images/gj-mapmarker.png'
            />
          </GoogleMap>
        </LoadScript>
      </Styled.Map>
      <Styled.ContactList>
        {contactDetails.contactInfo.map((contact, index) => {
          return (
            <div key={index}>
              <Heading text={contact.title} size={1} font='Cera' weight={2} noMargin />
              <RawHtmlWrapper content={contact.info} font='Cera' />
            </div>
          )
        })}
      </Styled.ContactList>
    </Styled.ContactDetails>
  )
}

export default ContactDetails
