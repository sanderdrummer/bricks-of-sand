import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import { Flex } from "../layout/flex";
import { shadows } from "../ui";
import { ShadowKeys } from "../ui/theme";

interface CardProps {
  height?: string;
  hover?: ShadowKeys;
  width?: string;
  margin?: string;
  padding?: string;
  background?: string;
  color?: string;
  flex?: boolean;
  level?: ShadowKeys;
}

export const Card = withTheme(
  styled(Flex)<CardProps>(
    {
      fontSize: "1rem",
      overflow: "hidden",
      padding: "1rem",
      position: "relative",
    },
    props => ({
      "&:hover": {
        boxShadow: props.hover ? shadows[props.hover || "level1"] : undefined,
      },
      background: props.background || props.theme.componentBackgroundLight,
      borderRadius: props.theme.borderRadius,
      boxShadow: props.level ? shadows[props.level || "level1"] : undefined,
      color: props.color,
      display: props.flex ? "flex" : "block",
      height: props.height,
      margin: props.margin,
      padding: props.padding,
      width: props.width,
    })
  )
);

interface DropDownCardProps {
  isSelected?: boolean;
  isHovered?: boolean;
}

export const DropDownCard = withTheme(
  styled(Card)<DropDownCardProps>({}, ({ isSelected, isHovered, theme }) => ({
    "&>*": {
      background: isSelected
        ? theme.hover
        : isHovered
        ? theme.hover
        : undefined,
    },
    background: theme.componentBackgroundLight,
    borderRadius: theme.borderRadius,
    boxShadow: theme.shadows.level2,
    padding: "5px",
    position: "absolute",
    width: "100%",
    zIndex: 500,
  }))
);

export const DropDownCardItem = withTheme(
  styled("div")<DropDownCardProps>(
    {
      minWidth: 0,
      overflow: "hidden",
      padding: "0.5rem",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    ({ isSelected, isHovered, theme }) => ({
      background: isHovered ? theme.hover : undefined,
      fontWeight: isSelected ? "bold" : undefined,
    })
  )
);

export const HoverCard = withTheme(
  styled(Card)(
    {
      background: "transparent",
    },
    ({ theme }) => ({
      "&:hover": {
        background: theme.hover,
      },
    })
  )
);
