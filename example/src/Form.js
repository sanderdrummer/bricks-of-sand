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
  PrimaryButton,
  Flex,
  ResponsiveGrid
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
      </Flex>
    </div>
  </div>
);
