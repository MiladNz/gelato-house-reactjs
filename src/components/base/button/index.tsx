// import type { JSX } from "react";
// import type React from "react";

// type ButtonProps = {
//   variant?: "contained" | "outlined" | "text";
// } & React.PropsWithChildren &
//   React.ButtonHTMLAttributes<HTMLButtonElement>;

// // hash table function
// const ButtonFactory = {
//   contained: ({ children, ...rest }) => (
//     <button className="p-2 bg-blue-100 rounded-3xl" {...rest}>
//       {children}
//     </button>
//   ),
//   outlined: ({ children, ...rest }) => (
//     <button className="border border-blue-300" {...rest}>
//       {children}
//     </button>
//   ),
//   text: ({ children, ...rest }) => (
//     <button className="text-blue-700" {...rest}>
//       {children}
//     </button>
//   ),
// };

// export const Button: React.FC<ButtonProps> = ({
//   variant = "contained",
//   ...props
// }): JSX.Element => {
//   return ButtonFactory[variant](props);
// };

// p12
// import type { JSX } from "react";
// import type React from "react";
// import { clx } from "src/utilities/clx";

// type ButtonProps = {
//   variant?: "contained" | "outlined" | "text";
//   color?: "primary" | "secondary";
//   size?: "small" | "medium" | "large";
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

// const buttonBaseStyles = "rounded-xl";

// const variants = {
//   contained: "contained text-white",
//   outlined: "",
//   text: "",
// };

// const colors = {
//   primary: "bg-primary-500",
//   secondary: "bg-secondary-500",
// };

// const sizes = {
//   small: "px-2 py-1 text-sm",
//   medium: "px-4 py-2 text-base",
//   large: "px-6 py-3 text-lg",
// };

// export const Button: React.FC<ButtonProps> = ({
//   variant = "contained",
//   children,
//   color = "secondary",
//   size = "medium",
//   ...props
// }): JSX.Element => {
//   return (
//     // () => {
//     // switch (variant) {
//     //   case "contained":
//     //     return (
//     <button
//       className={clx(
//         buttonBaseStyles,
//         variants[variant],
//         colors[color],
//         sizes[size]
//       )}
//       {...props}>
//       {children}
//     </button>
//   );
//   //   case "outlined":
//   //     return (
//   //       <button
//   //         className={clx(
//   //           buttonBaseStyles,
//   //           variants[variant],
//   //           colors[color],
//   //           sizes[size]
//   //         )}
//   //         {...props}>
//   //         outlined
//   //       </button>
//   //     );
//   //   case "text":
//   //     return (
//   //       <button
//   //         className={clx(
//   //           buttonBaseStyles,
//   //           variants[variant],
//   //           colors[color],
//   //           sizes[size]
//   //         )}
//   //         {...props}>
//   //         text
//   //       </button>
//   //     );

//   //   default:
//   //     return <button>outlined</button>;
//   // }
//   // }
//   // )();
// };

import type { JSX } from "react";
import type React from "react";
import { clx } from "src/utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-full outline-none";

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    sizes: {
      small: "px-5 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-7 py-3 text-lg",
    },
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500",
    sizes: {
      small: "px-4 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-8 py-3 text-lg",
    },
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
    sizes: {
      small: "p-1 text-sm",
      medium: "p-2 text-base",
      large: "p-3 text-lg",
    },
  },
};

// const sizes = {
//   small: "px-4 py-1 text-sm",
//   medium: "px-6 py-2 text-base",
//   large: "px-8 py-3 text-lg",
// };

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "secondary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      className={clx(
        buttonBaseStyles,
        variants[variant][color],
        variants[variant]["sizes"][size]
      )}
      {...props}>
      {children}
    </button>
  );
};
