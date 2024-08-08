import React, { useRef } from 'react'
import { ScrollView, Text } from 'react-native'
import { MainLayout } from '../../layouts/MainLayout'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getProductById, updateCreateProduct } from '../../../actions/products'
import { FullScreenLoader } from '../../components/ui/FullScreenLoader'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/StackNavigator'
import { Button, ButtonGroup, Input, Layout, useTheme } from '@ui-kitten/components'
import { MyIcon } from '../../components/ui/MyIcon'
import { Formik } from 'formik'
import { ProductImages } from '../../components/products/ProductImages'
import { genres, sizes } from '../../../config/constants/constants'
import { Product as ProductEntity } from '../../../domain/entities/product'
import { CameraAdapter } from '../../../config/adapters/camera-adapter'



interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {

}

export const Product = ({ route }: Props) => {

  const theme = useTheme();

  const productIdRef = useRef(route.params.productId);

  const queryClient = useQueryClient();

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductById(productIdRef.current),
  });

  const mutation = useMutation({
    mutationFn: (data: ProductEntity) => updateCreateProduct({ ...data, id: productIdRef.current }),
    onSuccess: (data: ProductEntity) => {

      productIdRef.current = data.id;

      queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });

      queryClient.invalidateQueries({ queryKey: ['product', productIdRef.current] });

      //queryClient.setQueryData(['product', productIdRef.current], data);


    }
  });

  if (isLoading) {
    return <FullScreenLoader />
  }

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <Formik
      initialValues={product}
      onSubmit={values => mutation.mutate(values)}
    >

      {

        ({ handleChange, handleSubmit, values, errors, setFieldValue }) => (

          <MainLayout title={values.title} subTitle={`Precio: ${values.price}`}
          rightAction={ async () => {

            const photos = await CameraAdapter.getPicturesFromLibrary();

            setFieldValue('images', [...values.images, ...photos]);

          }}
          rightActionIcon="camera-outline"
           >

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >

              <Layout>

                <ProductImages images={values.images} />

              </Layout>

              <Layout style={{
                marginHorizontal: 20,
              }} >

                <Input label="Titulo" value={values.title} style={{
                  marginVertical: 5
                }}
                  onChangeText={handleChange('title')}
                />

                <Input label="Slug" value={values.slug} style={{
                  marginVertical: 5
                }}
                  onChangeText={handleChange('slug')}
                />

                <Input label="Descripción" value={values.description} multiline numberOfLines={5} style={{
                  marginVertical: 5
                }}
                  onChangeText={handleChange('description')}
                />

              </Layout>

              <Layout style={{
                marginHorizontal: 15,
                flexDirection: 'row',
                gap: 10,
                marginVertical: 5
              }} >

                <Input label="Precio" keyboardType='numeric' value={values.price.toString()} style={{
                  flex: 1
                }}
                  onChangeText={handleChange('price')}
                />

                <Input label="Inventario" keyboardType='numeric' value={values.stock.toString()} style={{
                  flex: 1
                }}
                  onChangeText={handleChange('stock')}
                />

              </Layout>

              <ButtonGroup size='small' appearance='outline' style={{
                margin: 2,
                marginTop: 30,
                marginHorizontal: 15,
              }} >

                {
                  sizes.map((size) => (
                    <Button
                      key={size}
                      size='small'
                      style={{
                        flex: 1,
                        backgroundColor: values.sizes.includes(size) ? theme['color-primary-200'] : undefined,
                      }}
                      onPress={() => setFieldValue('sizes', values.sizes.includes(size) ? values.sizes.filter(s => s !== size) : [...values.sizes, size])}
                    >
                      {size}
                    </Button>
                  ))
                }

              </ButtonGroup>

              <ButtonGroup size='small' appearance='outline' style={{
                margin: 2,
                marginTop: 30,
                marginHorizontal: 15,
              }} >

                {
                  genres.map((gender) => (
                    <Button
                      key={gender}
                      size='small'
                      style={{
                        flex: 1,
                        backgroundColor: values.gender.startsWith(gender) ? theme['color-primary-200'] : undefined,
                      }}
                      onPress={() => setFieldValue('gender', gender)}
                    >
                      {gender}
                    </Button>
                  ))
                }

              </ButtonGroup>

              <Button
                accessoryLeft={() => <MyIcon name="save-outline" white />}
                onPress={() => handleSubmit()}
                style={{
                  margin: 15
                }}
                disabled={mutation.isPending}
              >
                Guardar
              </Button>

              <Layout style={{ height: 200 }} />

            </ScrollView>

          </MainLayout>

        )

      }


    </Formik>
  )
}
