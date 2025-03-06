declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { type FC, type SVGProps } from 'react';

    const SVG: FC<SVGProps<SVGSVGElement>>;
    export default SVG;
}
