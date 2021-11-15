import React from 'react';
import { IconType } from 'react-icons';
import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTelegramPlane,
  FaCode,
  FaStar
} from 'react-icons/fa';
import { AiFillApi, AiOutlineCloudServer, AiOutlineDeploymentUnit } from 'react-icons/ai';
import { BiLinkAlt } from 'react-icons/bi';
import { IoGitBranch } from 'react-icons/io5';

interface Icon {
  accessor?: string;
  component?: IconType;
}

const iconList: Icon[] = [
  { accessor: 'fa-github', component: FaGithub },
  { accessor: 'fa-linkedin', component: FaLinkedin },
  { accessor: 'fa-linkedin-in', component: FaLinkedinIn },
  { accessor: 'fa-telegram', component: FaTelegramPlane },
  { accessor: 'fa-code', component: FaCode },
  { accessor: 'fa-star', component: FaStar },
  { accessor: 'ai-fill-api', component: AiFillApi },
  { accessor: 'ai-cloud-server', component: AiOutlineCloudServer },
  { accessor: 'ai-deploy-unit', component: AiOutlineDeploymentUnit },
  { accessor: 'bi-link-alt', component: BiLinkAlt },
  { accessor: 'io-branch', component: IoGitBranch }
];

const iconLoader = (name?: string, size?: number, color?: string): JSX.Element => {
  const [Icon] = iconList.filter(({ accessor }) => accessor === name);
  const IconElement = React.createElement(Icon.component, { size, color });
  return IconElement;
};

export default iconLoader;
