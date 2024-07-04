import React, { useState } from 'react'
import { Modal, Platform, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Button } from '../../components/ui/Button'

export const ModalScreen = () => {

  const [isVisble, setIsVisble] = useState(false);

  return (
    <CustomView margin>

      <Title text='Modal' safe />

      <Button
        text='Open Modal'
        onPress={() => setIsVisble(true)}
      />


      <Modal visible={isVisble} animationType='slide' >

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>

          <View style={{
            paddingHorizontal: 10
          }} >
            <Title text='Modal Content' safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text='Close Modal'
            onPress={() => setIsVisble(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 50,
              borderRadius: 0
            }}
          />

        </View>

      </Modal>

    </CustomView>
  )
}
