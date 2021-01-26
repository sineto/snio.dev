import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Icon {
  accessor?: string
  component?: IconType
}

const iconList: Icon[] = [
  { accessor: 'fa-github', component: FaGithub },
  { accessor: 'fa-linkedin', component: FaLinkedin }
];

const iconLoader = (name?: string, size?: number, color?: string): JSX.Element => {
  const [Icon] = iconList.filter(({ accessor }) => (accessor === name));
  const IconElement = React.createElement(Icon.component, { size, color });
  return IconElement;
};

export default iconLoader;