export const stylesColorMap = (theme?: string, color?: string): any => {
  return {
    backgroundColor:
      color === "success"
        ? theme === "dark"
          ? "var(--dark-success)"
          : "var(--light-success)"
        : color === "error"
        ? theme === "dark"
          ? "var(--dark-error)"
          : "var(--light-error)"
        : color === "warning"
        ? theme === "dark"
          ? "var(--dark-warning)"
          : "var(--light-warning)"
        : color === "disabled"
        ? theme === "dark"
          ? "var(--dark-disabled)"
          : "var(--light-disabled)"
        : theme === "dark"
        ? "var(--dark)"
        : "var(--light)",
    color:
      color === "success"
        ? theme === "dark"
          ? "var(--light-success)"
          : "var(--dark-success)"
        : color === "error"
        ? theme === "dark"
          ? "var(--light-error)"
          : "var(--dark-error)"
        : color === "disabled"
        ? theme === "dark"
          ? "var(--light-disabled)"
          : "var(--dark-disabled)"
        : color === "warning"
        ? theme === "dark"
          ? "var(--light-warning)"
          : "var(--dark-warning)"
        : theme === "dark"
        ? "var(--light)"
        : "var(--dark)",
  };
};

const stylesPaddingMap = (size: string): string => {
  return size === "small"
    ? "4px 6px"
    : size === "large"
    ? "12px 24px"
    : "4px 16px";
};

const stylesFontSize = (size: string): string => {
  return size === "small" ? "14px" : size === "large" ? "20px" : "16px";
};

export const calcBtn = (theme: string, props: any | undefined): any => {
  const color = props?.color || "";
  const variant = props?.variant || "";
  const size = props?.size || "";
  const isHover = props?.isHover;
  const colors = stylesColorMap(theme, props?.disabled ? "disabled" : color);
  const padding = stylesPaddingMap(size);
  const fontSize = stylesFontSize(size);

  const hoverColors = isHover && {
    backgroundColor: colors.color,
    color: colors.backgroundColor,
  };

  return {
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    border: variant === "outlined" ? `${colors.color} solid 1px` : "none",
    padding,
    fontSize,
    transition: "background-color 0.5s, color 0.3s",
    ...hoverColors,
  };
};

export const calcSwitch = (theme: string) => {
  const colors = stylesColorMap(theme, "");
  const outterStyles = {
    shadow: `inset 0px 0px 2px 0px ${colors.color}`,
  };
  const innerStyles = {
    backgroundColor: theme === "dark" ? "var(--dark)" : "var(--white)",
    shadow: `inset ${theme === "dark" ? "-" : ""}4px 1px 10px ${colors.color}`,
  };

  return {
    inner: {
      backgroundColor: innerStyles.backgroundColor,
      boxShadow: innerStyles.shadow,
    },
    outter: {
      backgroundColor: colors.backgroundColor,
      boxShadow: outterStyles.shadow,
    },
  };
};

export const searchStyles = (theme: string) => ({
  width: "100%",
  backgroundColor: theme === "dark" ? "var(--dark)" : "var(--white)",
  borderRadius: 4,
  fontSize: 14,
  margin: 0,
  marginTop: "4px",
});

export const themeCommonStyles = (theme: string) => ({
  backgroundColor: `var(--${theme})`,
  color: `var(--${theme === "dark" ? "light" : "dark"})`,
});
