import React, { useCallback, useEffect, useState } from 'react';
import { TProduct, createRandomProduct } from '../../homeworks/ts1/3_write';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';
import { useIsVisible } from '../../hooks/useIsVisible';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  align-items: center;
`;

const nowDate = new Date(0);

const addProductsToList = (count = 5, list: TProduct[] = []): TProduct[] => {
  return [
    ...list,
    ...Array.from({ length: count }).map(() =>
      createRandomProduct(`${nowDate.getDate()}-${nowDate.getMonth()}-${nowDate.getFullYear()}`)
    ),
  ];
};

export const ProductList = () => {
  const [operations, setOperations] = useState<TProduct[]>(addProductsToList());

  const addProduct = useCallback((count = 5) => {
    setOperations((list) => addProductsToList(count, list));
  }, []);

  const targetRef = React.useRef(null);
  const isVisible = useIsVisible(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    targetRef
  );

  useEffect(() => {
    if (isVisible) {
      addProduct(5);
    }
  }, [addProduct, isVisible]);

  return (
    <ListContainer>
      {operations.map((operation) => (
        <li key={operation.id}>
          <ProductCard
            price={operation.price}
            category={operation.category.name}
            images={['1', '2', '3', '4']}
            name={operation.name}
            descr={operation.desc}
          />
        </li>
      ))}
      <li ref={targetRef} />
    </ListContainer>
  );
};
