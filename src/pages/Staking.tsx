import LendingTable from "components/lending/lendingTable";
import { ModalType } from "components/modalManager";
import StakeModal from "components/modals/stakeModal";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";
import { StyledPopup } from "./bridge";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 0 6rem; //TODO: make this dynamic
  .hero-box {
    border: 2px solid var(--primary-color);
    display: flex;
    justify-content: space-around;
    background-color: #072807;
    padding: 2rem;
  }

  .dual-item {
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    p:last-child {
      font-size: 30px;
    }
  }
  .selected {
    background: var(--primary-color);
    border-radius: 1px;
    color: black;
    /* z-index: 1000; */
  }

  /* .tablist {
    display: flex;
    list-style: none;
    border: 2px sold var(--primary-color);
    padding: 1rem;
    background-color: red;

    div {
        flex: 1;
    }
} */
  .tabs {
    margin-top: 2rem;
    height: 100%;
    /* margin: 16px; */
  }
  .tablist {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--primary-color);
    padding: 0;
    color: #efefef;
    font-weight: 400;
    .tab {
      flex: 1;
      cursor: pointer;
      padding: 0.5rem;
      text-align: center;
      transition: all 0.2s ease-in-out;
      &:hover:not(.selected) {
        background: #a7efd218;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

const StakeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  h1 {
    margin: 6rem;
    text-shadow: none;
    text-align: center;
  }
`;

const ValidatorContainer = styled.div``;
const Button = styled.button`
  font-weight: 300;
  font-size: 18px;
  background-color: black;
  color: var(--primary-color);
  padding: 0.2rem 2rem;
  border: 1px solid var(--primary-color);
  margin: 3rem auto;
  display: flex;
  align-self: center;

  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;
const Staking = () => {
      //this is used to check and set the lending modal is open or not
  const [isOpen, setIsOpen] = useState(false);
  //this is used to set the kind of modal to be opened
  const [modalType, setModalType] = useState<ModalType>(ModalType.LENDING);
  return (
    <Container>
      <h1>Staking</h1>
      <div className="hero-box">
        <div className="dual-item">
          <p>available</p>
          <p>0 canto</p>
        </div>
        <div className="dual-item">
          <p>total staked</p>
          <p>0 canto</p>
        </div>
        <div className="dual-item">
          <p>total unbonding</p>
          <p>0 canto</p>
        </div>
        <div className="dual-item">
          <p>reward distribution</p>
          <p>23h 12m 1s</p>
        </div>
      </div>

      <Tabs
        disabledTabClassName="disabled"
        selectedTabClassName="selected"
        className={"tabs"}
      >
        <TabList className={"tablist"}>
          <Tab className={"tab"} selectedClassName="tab-selected">
            staking
          </Tab>
          <Tab className={"tab"} selectedClassName="tab-selected">
            all validators
          </Tab>
        </TabList>

        <TabPanel>
          <StakeContainer>
            <h1>no canto staked</h1>
            <Button>view all validators</Button>
          </StakeContainer>
        </TabPanel>
        <TabPanel>
          <ValidatorContainer>
            <LendingTable
              isLending={false}
              columns={[
                "rank",
                "name",
                "voting power",
                "staked",
                "commision",
                "",
              ]}
            >
          
              {/* create a component out of this */}
              <tr>
                <td>#1</td>
                <td>testing.com</td>
                <td>34.5k canto</td>
                <td>--</td>
                <td>5%</td>
                <td>
                  <Button
                    style={{
                      margin: "0",
                      textAlign: "center",
                    }}
                    onClick={()=>{
                        setIsOpen(true)
                    }}
                  >
                    manage
                  </Button>
                </td>
              </tr>
            </LendingTable>
          </ValidatorContainer>
        </TabPanel>
      </Tabs>

      <StyledPopup open={isOpen} onClose={()=>{
            setIsOpen(false)
        }}>
            <StakeModal/>
      </StyledPopup>
    </Container>
  );
};

export default Staking;
