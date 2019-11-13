import React, { FC } from 'react'
import { Button } from 'vtex.styleguide'
import * as firebase from 'firebase/app'
import { useQuery } from 'react-apollo'

import firebaseDataQuery from './graphql/firebaseData.gql'


const PushNotificationButton = ({ children }) => {
  const { data, loading, error } = useQuery(firebaseDataQuery)

  const promptPush = () => {
    if(data) {
      const { firebaseConfig, vapidKeys } = data
      import('firebase/messaging').then(f => {
        firebase.initializeApp(firebaseConfig)
        const messaging = firebase.messaging()
        messaging.usePublicVapidKey(vapidKeys.publicKey)
        messaging.useServiceWorker() //missing
        messaging.requestPermission().then(() => {
          console.log('have permisson')
          return messaging.getToken()
        }).then((token) => {
          console.log(token)
        })
      })
    } else {
      console.log('sad day')
    }
  }

  return (
    <Button onClick={promptPush} size="small">
      {children}
    </Button>
  )
}

export default PushNotificationButton