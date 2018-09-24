import React from "react";

import { AutoGrid, Card, ResponsiveGrid, Flex, Column } from "bricks-of-sand";

export const Layout = () => (
  <div>
    <h1>Layout</h1>

    <h2>FlexBox Utility</h2>
    <div>
      <Flex>
        <Column margin="1rem" flex="1">
          <Card>
            <p>oben</p>
            <p>unten</p>
          </Card>
        </Column>
        <Column margin="1rem" flex="2">
          <Card>
            <p>oben</p>
            <p>unten</p>
          </Card>
        </Column>
      </Flex>
    </div>
    <div>
      <Flex justifyContent="space-around">
        <Card>
          <p>oben</p>
          <p>unten</p>
        </Card>
        <Card>
          <p>oben</p>
          <p>unten</p>
        </Card>
        <Card>
          <p>oben</p>
          <p>unten</p>
        </Card>
      </Flex>
    </div>

    <h2>Dynamic Responsive Grid</h2>
    <ResponsiveGrid
      alignContent="start"
      justifySelf="end"
      rows="2fr 1fr"
      laptopColumns="2fr 3fr 1fr"
      tabletColumns="1fr 2fr 2fr"
    >
      <Card>lorem </Card>
      <Card>
        <Flex flex="1" flexDirection="column" justifyContent="space-around">
          <p>oben</p>
          <p>unten</p>
        </Flex>
      </Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
    </ResponsiveGrid>
    <h2>Auto Grid</h2>
    <AutoGrid>
      <Card>Test</Card>
      <Card>
        <p>oben</p>
        <p>unten</p>
      </Card>
      <Card />
      <Card>Test</Card>
      <Card>
        <p>oben</p>
        <p>unten</p>
      </Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
    </AutoGrid>
  </div>
);
