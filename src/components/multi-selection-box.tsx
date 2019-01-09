import * as React from "react";

import styled from "@emotion/styled";
import Downshift from "downshift";
import { withTheme } from "emotion-theming";

import { Relative } from "../layout";
import { DropDownCard, DropDownCardItem } from "./card";

interface Mapped<T> {
  [key: number]: T;
}

const TabInput = withTheme(
  styled("div")(
    {
      display: "inline-flex",
      flexWrap: "wrap",
      input: {
        flexGrow: 1,
        minHeight: "2rem",
        outlineColor: "transparent",
      },
    },
    ({ theme }) => ({
      background: theme.componentBackgroundDark,
      border: "solid 1px transparent",
      borderRadius: theme.borderRadius,
      color: theme.primary,
      padding: "0 0.5rem",
      width: "100%",
    })
  )
);
export const SelectionTab = withTheme(
  styled("div")<{
    isValid?: boolean;
  }>(({ theme, isValid }) => ({
    alignItems: "center",
    background: isValid ? theme.green : theme.red,
    borderRadius: theme.borderRadius,
    display: "flex",
    marginRight: "4px",
    minHeight: "2rem",
    padding: "0 0.5rem",
    span: {
      marginLeft: "0.2rem",
    },
  }))
);
interface State<T> {
  selection: Mapped<T>;
}

interface Props<T> {
  items: Mapped<T>;
  placeholder: string;
  disabled?: boolean;
  errorMessageMap?: {
    [key: number]: string;
  };
  onSelect(selection: Mapped<T>, item: T): void;
  itemToString(item: T): string;
  getItemIndex(item: T | null): number;
  renderTabs?(item: T, onClick: (item: T) => void): React.ReactNode;
}

export class MultiSelectionBox<T = any> extends React.Component<
  Props<T>,
  State<T>
> {
  public static defaultProps = {
    errorMessageMap: {},
    items: {},
    placeholder: "",
  };

  public state = {
    // tslint:disable-next-line:no-object-literal-type-assertion
    selection: {} as Mapped<T>,
  };

  public clearSelection: any;

  public handleSelection = (item: T) => {
    if (this.isInSelection(item)) {
      this.deselect(item);
    } else {
      this.select(item);
    }
    this.clearSelection();
  };

  public select = (item: T) => {
    if (item) {
      this.setState(
        state => ({
          selection: {
            ...state.selection,
            [this.props.getItemIndex(item)]: item,
          },
        }),
        () => {
          this.props.onSelect(this.state.selection, item);
        }
      );
    }
  };

  public deselect = (item: T) => {
    const selection = this.state.selection;
    delete selection[this.props.getItemIndex(item)];
    this.setState(
      {
        selection,
      },
      () => {
        this.props.onSelect(this.state.selection, item);
      }
    );
  };

  public getSelectionArray = (collection: Mapped<T>) => {
    return Object.values(collection);
  };

  public isInSelection = (item: T) => {
    return this.state.selection[this.props.getItemIndex(item)];
  };

  public renderTabs = (item: T, onClick: (item: T) => void) => {
    const errorMessage =
      (this.props.errorMessageMap &&
        this.props.errorMessageMap[this.props.getItemIndex(item)]) ||
      "";
    return (
      <SelectionTab
        isValid={!errorMessage}
        onClick={() => onClick(item)}
        key={this.props.getItemIndex(item)}
      >
        <span style={{ fontSize: "0.8rem" }}>&#10005;</span>
        <span>{this.props.itemToString(item)}</span>
        <span>{errorMessage}</span>
      </SelectionTab>
    );
  };

  public render(): JSX.Element {
    const props = this.props;
    const items = this.props.items;

    return (
      <Downshift onChange={this.handleSelection} itemToString={() => ""}>
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => {
          this.clearSelection = clearSelection;
          return (
            <div>
              <Relative>
                <TabInput>
                  {this.getSelectionArray(this.state.selection).map(item => {
                    return this.renderTabs(item, this.deselect);
                  })}
                  <input
                    {...getInputProps({
                      disabled: props.disabled,
                      placeholder: props.placeholder,
                    })}
                  />
                </TabInput>

                {isOpen && (
                  <DropDownCard {...getMenuProps()}>
                    {this.getSelectionArray(items)
                      .filter(
                        item =>
                          !inputValue ||
                          props
                            .itemToString(item)
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                      )
                      .map((item, index) => (
                        <DropDownCardItem
                          isHovered={highlightedIndex === index}
                          isSelected={this.isInSelection(item)}
                          {...getItemProps({ item, index })}
                          key={props.itemToString(item)}
                        >
                          {props.itemToString(item)}
                        </DropDownCardItem>
                      ))}
                  </DropDownCard>
                )}
              </Relative>
            </div>
          );
        }}
      </Downshift>
    );
  }
}
