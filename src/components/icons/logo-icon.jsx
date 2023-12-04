import { SvgIcon } from "@mui/material";
import palette from "../../theme/palette";

const LogoIcon = () => {
  return (
    <SvgIcon fontSize="large">
      <path
        fill="none"
        strokeWidth={1.5}
        stroke={palette.primary}
        strokeLinejoin="round"
        d="m2.18,2.4h6.66c.16,0,.26.17.18.31l-.07.13c-.11.19-.17.41-.17.63v2.56c0,.7-.56,1.26-1.26,1.26h-2.91c-.93,0-1.68.75-1.68,1.68v4.05c0,.93.75,1.68,1.68,1.68h3.33c.46,0,.84.38.84.84v3.37c0,.81.66,1.47,1.47,1.47h.9c.23,0,.41.18.41.41h0c0,.35-.28.63-.63.63H2.18c-.93,0-1.68-.75-1.68-1.68V4.08c0-.93.75-1.68,1.68-1.68Z"
      />
      <path
        fill="none"
        strokeWidth={1.5}
        stroke={palette.appWhite}
        strokeLinejoin="round"
        d="m21.82,19.52h-6.66c-.16,0-.26-.17-.18-.31l.07-.13c.11-.19.17-.41.17-.63v-2.56c0-.7.56-1.26,1.26-1.26h2.91c.93,0,1.68-.75,1.68-1.68v-4.05c0-.93-.75-1.68-1.68-1.68h-3.33c-.46,0-.84-.38-.84-.84v-3.37c0-.81-.66-1.47-1.47-1.47h-.9c-.23,0-.41-.18-.41-.41h0c0-.35.28-.63.63-.63h8.75c.93,0,1.68.75,1.68,1.68v15.66c0,.93-.75,1.68-1.68,1.68Z"
      />
    </SvgIcon>
  );
};

export default LogoIcon;

// <defs><style>.cls-1{fill:none;stroke:#43ba87;stroke-linecap:round;stroke-linejoin:round;}</style></defs>
