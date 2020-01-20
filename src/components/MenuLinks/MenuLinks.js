import React from 'react';
import links from './content';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const MenuLinks = () => {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, index) => (
          <S.MenuLinksItem key={index}>
            <S.MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.5}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
};

export default MenuLinks;
