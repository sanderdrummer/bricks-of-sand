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
  GreenButton,
  RedButton,
  Block,
  PrimaryButton,
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
    <Block margin="2rem">
      <TextButton disabled>FOCUS ME</TextButton>
      <TextButton>FOCUS ME</TextButton>
      <TextButton>FOCUS ME</TextButton>
    </Block>
    <Block margin="2rem">
      <GreenButton>1.200</GreenButton>
      <GreenButton disabled>1.200</GreenButton>
    </Block>
    <Block margin="2rem">
      <RedButton>1.200</RedButton>
      <RedButton disabled>1.200</RedButton>
    </Block>
    <Block margin="2rem">
      <Button>1.200</Button>
      <Button disabled>1.200</Button>
    </Block>
    <Block margin="2rem">
      <PrimaryButton>1.200</PrimaryButton>
      <PrimaryButton disabled>1.200</PrimaryButton>
    </Block>
    <Flex width="320px" justifyContent="space-around" margin="2rem">
      <PrimaryButton>Primary</PrimaryButton>
      <Button>Plain</Button>
      <TextButton>Text</TextButton>
      <RedButton>Red</RedButton>
      <GreenButton>Green</GreenButton>
    </Flex>
  </div>
);
