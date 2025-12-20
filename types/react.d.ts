declare module 'react' {
  export type ReactElement = any;
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => ReactElement | null;
  export const Fragment: any;
  export const memo: any;
  export default any;
}
