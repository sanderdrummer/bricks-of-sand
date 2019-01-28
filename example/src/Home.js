import React from "react";

import {
  Ellipsis,
  Icon,
  AcceptIcon,
  Card,
  MultiSelectionBox,
  Input,
} from "bricks-of-sand";

export const Home = () => (
  <div>
    <Ellipsis>
      Thats a pretty long text that sould wrap and automatically appear in the
      title as thats what the ellipsis does now
    </Ellipsis>
    <Card height="100vh" margin="2rem">
      <h1>Bricks of Sand</h1>
      <h2>just another react component framework</h2>
      <div>
        <MultiSelectionBox
          placeholder="test"
          items={[
            { name: "hello" },
            { name: "peter" },
            { name: "test" },
            { name: "test1" },
            { name: "test2" },
            { name: "test3" },
          ]}
          getItemIndex={item => item.name}
          itemToString={item => (item ? item.name : "")}
        />
        <Input placeholder="hello world" />
        <Icon
          width="1rem"
          height="1rem"
          children={<AcceptIcon />}
          color="redText"
        />
        <Icon
          width="8rem"
          height="8rem"
          children={<AcceptIcon />}
          color="greenText"
        />
      </div>
    </Card>
  </div>
);
