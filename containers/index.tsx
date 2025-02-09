import { ReactNode } from 'react';
import { Base } from './base';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  return <Base>{props.children}</Base>;
}
