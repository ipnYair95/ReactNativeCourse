import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { useAuthStore } from '../../store/auth/useAuthStore'
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';
import { FAB } from '../../components/ui/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

export const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  /* const { isLoading, data: products = [] } = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  }); */

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    queryFn: async (params) => await getProductsByPage(params.pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length
  });

  return (
    <>
      <MainLayout
        title='Teslo Shop - Products'
        subTitle='Aplicacón administrativa'
      >

        {
          isLoading
            ? <FullScreenLoader />
            : <ProductList products={data?.pages.flat() ?? []} fetchNextPage={fetchNextPage} />
        }

      </MainLayout>

      <FAB
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20
        }}
        iconName="plus-outline"
        onPress={() => navigation.navigate('ProductScreen', { productId: 'new' })}
      />

    </>
  )
}
