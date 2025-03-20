import { SVGAttributes } from "react";

export type IconProps = SVGAttributes<SVGElement>;

export function WorldIcon(props: IconProps) {
    return (
        <svg width="80" height="84" viewBox="0 0 80 84" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M72.7041 30.9708C74.7054 32.035 76.3793 33.6237 77.5467 35.5666C78.714 37.5095 79.3307 39.7334 79.3307 42C79.3307 44.2666 78.714 46.4905 77.5467 48.4334C76.3793 50.3763 74.7054 51.9649 72.7041 53.0291L19.3208 82.0583C10.725 86.7375 0.166626 80.6541 0.166626 71.0333V12.9708C0.166626 3.34581 10.725 -2.73335 19.3208 1.93748L72.7041 30.9708Z" fill="#FEF9E1" />
        </svg>
    )
}