import React from "react";

import {
  Card,
  MaterialInput,
  Button,
  FormField,
  Input,
  ThemeSwitcher,
  AcceptButton,
  CancelButton,
  Flex,
  AutoComplete,
  SearchAutoComplete,
  TextButton,
} from "bricks-of-sand";

export const Form = () => (
  <div>
    <MaterialInput>
      <Input placeholder="i am a fancy input" />
    </MaterialInput>
    <Card margin="2rem">
      <FormField>
        <label>
          an input
          <Input placeholder="a input with a label" />
        </label>
      </FormField>
      <FormField>
        <label>
          a checkbox
          <Input type="checkbox" />
        </label>
      </FormField>
      <FormField>
        <label>
          a radio
          <Input type="radio" />
        </label>
      </FormField>
      <FormField>
        <label>
          a select box
          <select>
            <option>Hello</option>
          </select>
        </label>
      </FormField>
      <FormField>
        <Button> The button</Button>
      </FormField>
    </Card>
    <div>
      <ThemeSwitcher />
    </div>
    <div>
      <Flex>
        <AcceptButton margin="0 1rem" />
        <CancelButton margin="0 1rem" />
        <AcceptButton disabled margin="0 1rem" />
        <CancelButton disabled margin="0 1rem" />
      </Flex>
    </div>
    <div>
      <AutoComplete
        onSelect={user => console.log(user)}
        items={[{ name: "peter" }, { name: "uschi" }]}
      />
      <SearchAutoComplete
        onSelect={user => console.log(user)}
        items={[{ name: "peter" }, { name: "uschi" }]}
      />
    </div>
    <div>
      <TextButton>FOCUS ME</TextButton>
      <TextButton>FOCUS ME</TextButton>
      <TextButton>FOCUS ME</TextButton>
    </div>
  </div>
);
