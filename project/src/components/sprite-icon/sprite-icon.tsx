type SpriteIconType = {
  id: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
};

function SpriteIcon({
  id,
  width = '1em',
  height = width,
  fill = 'currentColor',
}: SpriteIconType): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      aria-hidden='true'
      focusable='false'
    >
      <use href={`sprite.svg#${id}`} />
    </svg>
  );
}

export default SpriteIcon;
