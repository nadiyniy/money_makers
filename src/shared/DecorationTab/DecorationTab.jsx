import React from 'react';
import { Amount, Flex, IconWrapper, Percent, StyledDecorationTab, Text } from './DecorationTab.styled';
import { ArrowUpRight } from 'components/svgs';

const DecorationTab = () => {
  return (
    <StyledDecorationTab>
      <IconWrapper>
        <ArrowUpRight />
      </IconWrapper>
      <div>
        <Text>Your balance</Text>
        <Flex>
          <Amount>$632.000</Amount>
          <Percent>+1.29%</Percent>
        </Flex>
      </div>
    </StyledDecorationTab>
  );
};

export default DecorationTab;
