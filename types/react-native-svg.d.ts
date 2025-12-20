declare module 'react-native-svg' {
  import { Component } from 'react';
  
  export interface SvgFromXmlProps {
    xml: string;
    width?: string | number;
    height?: string | number;
    override?: object;
  }
  
  export class SvgFromXml extends Component<SvgFromXmlProps> {}
  
  export interface SvgProps {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    style?: any;
  }
  
  export class Svg extends Component<SvgProps> {}
  
  export default Svg;
}
