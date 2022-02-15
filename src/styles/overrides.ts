declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface TypographyVariants {
    thick: React.CSSProperties;
    prose: React.CSSProperties;
    code?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    thick?: React.CSSProperties;
    prose?: React.CSSProperties;
    code?: React.CSSProperties;
  }

  interface Palette {
    bg: Palette['primary'];
  }
  interface PaletteOptions {
    bg: PaletteOptions['primary'];
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    thick: true;
    prose: true;
    code: true;
  }
}

export {};
