import { FC } from 'react';
import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';
import ReactShoppingCartTemplate from '../../components/shared/ReactShoppingCartTemplate';
import useFetch from '../../hooks/shared/useFetch';
import { requestProductList } from '../../service/request/productList';
import { Product } from '../../types';

const ProductListPage: FC = () => {
  const productList = useFetch(requestProductList);

  return (
    <ReactShoppingCartTemplate>
      {productList.isLoading ? (
        <Loading />
      ) : (
        <ProductList products={productList.data as Product[]} />
      )}
    </ReactShoppingCartTemplate>
  );
};

export default ProductListPage;
