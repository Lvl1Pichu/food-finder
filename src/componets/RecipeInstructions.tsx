import React from 'react';
import styled from 'styled-components';

const MethodContainer = styled.div`
  text-align: center;
`;

const MethodTitle = styled.h2`
  margin-bottom: 10px;
`;

const MethodList = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
`;

const MethodListItem = styled.li`
  font-size: 14px;
`;

const MethodComponent = () => {
  return (
    <MethodContainer>
      <MethodTitle>Method</MethodTitle>
      <MethodList>
        <MethodListItem>Step 1: (get API information about recipe)</MethodListItem>
        <MethodListItem>Step 2: (get API information about recipe)</MethodListItem>
        <MethodListItem>Step 3: (get API information about recipe)</MethodListItem>
      </MethodList>
    </MethodContainer>
  );
};

export default MethodComponent;