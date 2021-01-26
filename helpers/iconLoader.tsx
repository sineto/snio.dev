import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { AiFillApi, AiOutlineCloudServer, AiOutlineDeploymentUnit } from 'react-icons/ai';

interface Icon {
  accessor?: string
  component?: IconType
}

const iconList: Icon[] = [
  { accessor: 'fa-github', component: FaGithub },
  { accessor: 'fa-linkedin', component: FaLinkedin },
  { accessor: 'fa-code', component: FaCode},
  { accessor: 'ai-fill-api', component: AiFillApi },
  { accessor: 'ai-cloud-server', component: AiOutlineCloudServer },
  { accessor: 'ai-deploy-unit', component: AiOutlineDeploymentUnit }
];

const iconLoader = (name?: string, size?: number, color?: string): JSX.Element => {
  const [Icon] = iconList.filter(({ accessor }) => (accessor === name));
  const IconElement = React.createElement(Icon.component, { size, color });
  return IconElement;
};

export default iconLoader;