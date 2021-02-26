import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

const TabDiv = styled.div`
  background-color: red;
  /* display: flex; */
`;

const TabListWrapper = styled.div``;

const tabList = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
const tabContent = ['Content 1', 'Content 2', 'Content 3', 'Content 4'];

function TabWrapper() {
  return (
    <TabDiv>
      <Tabs>
        <TabListWrapper>
          <TabList>
            {tabList.map((tab) => (
              <Tab>{tab}</Tab>
            ))}
          </TabList>
        </TabListWrapper>
        {tabContent.map((tab) => (
          <TabPanel>
            <div>
              <h3>{tab}</h3>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </TabDiv>
  );
}

export default TabWrapper;
