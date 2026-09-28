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

/** Play glyph from the Figma `play` layer, used on video reel thumbnails. */
export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.95114 2.999C3.81895 3.22743 3.74938 3.48669 3.74945 3.75061V14.2499C3.74938 14.5138 3.81895 14.7731 3.95114 15.0015C4.08334 15.23 4.27348 15.4195 4.50236 15.5509C4.73124 15.6824 4.99077 15.7511 5.25473 15.7503C5.51869 15.7494 5.77775 15.6788 6.00573 15.5458L15.0068 10.2962C15.2337 10.164 15.4219 9.97467 15.5527 9.74701C15.6834 9.51935 15.7521 9.26138 15.7519 8.99886C15.7516 8.73635 15.6825 8.47849 15.5514 8.25106C15.4202 8.02363 15.2317 7.8346 15.0046 7.70285L6.00573 2.45469C5.77775 2.32168 5.51869 2.25116 5.25473 2.25027C4.99077 2.24937 4.73124 2.31813 4.50236 2.44959C4.27348 2.58105 4.08334 2.77056 3.95114 2.999Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Pause glyph drawn to match `PlayIcon`'s 18px grid, for the voice sample players. */
export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5.25 3.75V14.25M12.75 3.75V14.25"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
