import Downshift from "downshift";
import * as React from "react";
import { DropDownCard, DropDownCardItem } from "../components/card";
import { SearchIcon } from "../icons/search";
import { Relative } from "../layout/block";
import { IconInput } from "./icon-input";
import { Input } from "./input";

export interface AutoCompleteProps<T extends { id: string }> {
  id?: string;
  autoFocus?: boolean;
  placeholder: string;
  disabled?: boolean;
  items: T[];
  input: (props: any) => React.ReactNode;
  getString(item: T): string;
  onSelect(item: T): void;
}

AutoComplete.defaultProps = {
  getString: (item: any) => (item ? item.name : ""),
  input: (props: any) => <Input {...props} />,
};

export function AutoComplete<T extends { id: string }>(
  props: AutoCompleteProps<T>
): JSX.Element {
  const items = props.items.filter(item => {
    if (!props.id) {
      return true;
    } else {
      return item.id !== props.id;
    }
  });

  return (
    <Downshift
      onChange={selection => {
        props.onSelect(selection);
      }}
      itemToString={
        props.getString ? props.getString : item => (item ? item.name : "")
      }
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        clearSelection,
        openMenu,
      }) => (
        <div>
          <Relative>
            {props.input({
              ...getInputProps({
                disabled: props.disabled,
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                  if (e.currentTarget.value === "") {
                    clearSelection();
                  }
                },
                onFocus: openMenu,
                placeholder: props.placeholder,
              }),
            })}
            {isOpen && (
              <DropDownCard {...getMenuProps()}>
                {items
                  .filter(
                    item =>
                      !inputValue ||
                      props
                        .getString(item)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <DropDownCardItem
                      isHovered={highlightedIndex === index}
                      isSelected={selectedItem === item}
                      {...getItemProps({ item, index })}
                      key={props.getString(item)}
                    >
                      {props.getString(item)}
                    </DropDownCardItem>
                  ))}
              </DropDownCard>
            )}
          </Relative>
        </div>
      )}
    </Downshift>
  );
}

interface SearchProps {
  activeWidth: string;
  inactiveWidth: string;
}

export const SearchAutoComplete = <T extends { id: string }>(
  props: SearchProps & AutoCompleteProps<T>
): JSX.Element => (
  <AutoComplete
    {...props}
    input={inputProps => (
      <IconInput
        activeWidth={props.activeWidth}
        inactiveWidth={props.inactiveWidth}
      >
        <input {...inputProps} />
        <SearchIcon />
      </IconInput>
    )}
  />
);
