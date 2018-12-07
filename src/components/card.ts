import styled from "react-emotion";
import { ShadowKeys, withTheme } from "..";
import { Flex } from "../layout";
import { shadows } from "../ui";
import { Ellipsis } from "../ui/ellipsis-container";

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

export const Card = styled(Flex)<CardProps>(
  {
    fontSize: "1rem",
    overflow: "hidden",
    padding: "1rem",
    position: "relative",
    transition: "all 0.3s cubic-bezier(.25, .8, .25, 1)"
  },
  props => ({
    "&:hover": {
      boxShadow: props.hover ? shadows[props.hover || "level1"] : undefined
    },
    background: props.background || props.theme.componentBackgroundLight,
    borderRadius: props.theme.borderRadius,
    boxShadow: props.level ? shadows[props.level || "level1"] : undefined,
    color: props.color,
    display: props.flex ? "flex" : "block",
    height: props.height,
    margin: props.margin,
    padding: props.padding,
    width: props.width
  })
);

interface DropDownCardProps {
  isSelected?: boolean;
  isHovered?: boolean;
}

export const DropDownCard = withTheme(
  styled(Card)<DropDownCardProps>({}, ({ isSelected, isHovered, theme }) => ({
    "&>*": {
      background: isSelected
        ? theme.lightGrey
        : isHovered
        ? theme.lightGrey
        : undefined
    },
    background: theme.componentBackgroundLight,
    borderRadius: theme.borderRadius,
    boxShadow: theme.shadows.level2,
    padding: "5px",
    position: "absolute",
    width: "100%",
    zIndex: 500
  }))
);

export const DropDownCardItem = withTheme(
  styled(Ellipsis)<DropDownCardProps>(
    {},
    ({ isSelected, isHovered, theme }) => ({
      background: isHovered ? theme.lightGrey : undefined,
      fontWeight: isSelected ? "bold" : undefined
    })
  )
);
