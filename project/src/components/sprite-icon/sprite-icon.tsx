import { SVGAttributes } from 'react';

type SpriteIconType = SVGAttributes<SVGElement> & {
  id: string;
};

function SpriteIcon({
  id,
  width = '1em',
  height = width,
  fill = 'currentColor',
  ...other
}: SpriteIconType): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      aria-hidden='true'
      focusable='false'
      {...other}
    >
      <use href={`sprite.svg#${id}`} />
    </svg>
  );
}

export default SpriteIcon;
