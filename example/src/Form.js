import React from "react";

import { Card, MaterialInput, Button, FormField } from "bricks-of-sand";

export const Form = () => (
  <div>
    <MaterialInput>
      <input placeholder="i am a fancy input" />
    </MaterialInput>
    <Card margin="2rem">
      <FormField>
        <label>
          an input
          <input placeholder="a input with a label" />
        </label>
      </FormField>
      <FormField>
        <label>
          a checkbox
          <input type="checkbox" />
        </label>
      </FormField>
      <FormField>
        <label>
          a radio
          <input type="radio" />
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
  </div>
);
