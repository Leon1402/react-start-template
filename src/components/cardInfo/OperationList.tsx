import React, { useCallback, useEffect, useState } from 'react';
import { TProduct, createRandomProduct } from '../../homeworks/ts1/3_write';
import { OperationCard } from './OperationCard';
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

const addOperationsToList = (count = 5, list: TProduct[] = []): TProduct[] => {
  return [
    ...list,
    ...Array.from({ length: count }).map(() =>
      createRandomProduct(`${nowDate.getDate()}-${nowDate.getMonth()}-${nowDate.getFullYear()}`)
    ),
  ];
};

export const OperationList = () => {
  const [operations, setOperations] = useState<TProduct[]>(addOperationsToList());

  const addOperations = useCallback((count = 5) => {
    setOperations((list) => addOperationsToList(count, list));
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
      addOperations(5);
    }
  }, [addOperations, isVisible]);

  return (
    <ListContainer>
      {operations.map((operation) => (
        <li key={operation.id}>
          <OperationCard
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
