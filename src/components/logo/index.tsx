import React from 'react';
import {SvgIcon} from 'components';

interface CustomLogoProps {
  size?: number;
}

export const AppLogo: React.FC<CustomLogoProps> = ({size}) => {
  return <SvgIcon size={size} name="Logo" />;
};
