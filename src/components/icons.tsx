import type { SVGProps } from "react";

/**
 * Arrow glyph from the Figma `arrow-right` layer. The exported SVG ships with a
 * scaled-up `stroke-width` artifact; the path data is kept verbatim and the
 * stroke normalized + set to `currentColor` so it inherits text color.
 */
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.16608 9.99955H15.8341M10.0001 15.8335L15.8341 9.99955L10.0001 4.16554"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
