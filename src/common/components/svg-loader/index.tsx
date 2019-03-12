import * as React from "react";
import SVG from "react-inlinesvg";

interface SvgLoaderProps {
  image: any;
  className?: string;
}

export const SvgLoader: React.StatelessComponent<SvgLoaderProps> = props => (
  <SVG className={props.className} src={props.image} cacheGetRequests={true} />
);
