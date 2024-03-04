import type { DefaultSvgProps } from "src/utils";

export function Swap({ className, size = 16 }: DefaultSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        d="M10.354 1.646a.5.5 0 0 0-.708.708L11.293 4H3.5a.5.5 0 0 0 0 1h7.793L9.646 6.646a.5.5 0 1 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708zm-4 7.708a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 12H12.5a.5.5 0 0 0 0-1H4.707z"
      />
    </svg>
  );
}