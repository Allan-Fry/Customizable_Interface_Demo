import React, { useState } from "react";
import { Container, Nav, NavItem, NavLink, TabContent } from "reactstrap";
import classnames from 'classnames';
import { NavTab } from "./SingleTab";

export const GameTabs = (props) =>{

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    
    }; 
    return (
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                FirstGame
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                SecondGame
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <NavTab />
            <NavTab />
          </TabContent>
        </Container>
      );
   

}
