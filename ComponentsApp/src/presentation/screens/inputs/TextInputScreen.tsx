import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { colors, globalStyles } from '../../../config/theme/theme'
import { Card } from '../../components/ui/Card'

export const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView>
        <CustomView margin >

          <Title text='Text Input' safe />

          <Card>

            <TextInput
              style={{
                ...globalStyles.input,
                backgroundColor: colors.background
              }}
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <TextInput
              style={{
                ...globalStyles.input,
                backgroundColor: colors.background
              }}
              placeholder='Correo'
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={{
                ...globalStyles.input,
                backgroundColor: colors.background
              }}
              placeholder='Telefono'
              keyboardType='phone-pad'
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />


            <View style={{ height: 10 }} />

            <Card>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
              <Text style={{ color: colors.text }} > {JSON.stringify(form, null, 2)} </Text>
            </Card>

          </Card>

        </CustomView>

        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
