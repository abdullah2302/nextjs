declare module "*exit-intent-popup.js";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "exit-intent-popup": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          heading?: string;
          message?: string;
          delay?: number | string;
          once?: "true" | "false";
          "mobile-scroll"?: "true" | "false";
          "top-only"?: "true" | "false";
          "hide-on-return"?: "true" | "false";
          "auto-close"?: number | string;
          debug?: boolean | "";
        },
        HTMLElement
      >;
    }
  }
}

export {};