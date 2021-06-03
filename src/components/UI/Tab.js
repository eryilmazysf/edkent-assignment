import React from "react";
import DraftsIcon from "@material-ui/icons/Drafts";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { Card } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ListAltIcon from "@material-ui/icons/ListAlt";
import "./Tab.css";

const PanelTab = () => {
  const { TabPane } = Tabs;
  const percentage = 85;
  return (
    <div className="tabsContainer">
      <Tabs type="card" size="large">
        <TabPane tab="Tab 1" key="1">
          <div className="cardContainer">
            <Card className="card">
              <div className="itemsContainer">
                <div className="circular">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="cardText">
                  50/200 <br /> TYPE1
                </div>
              </div>
            </Card>

            <Card className="card">
              <div className="itemsContainer">
                <div>
                  <DraftsIcon style={{ fontSize: "5vw", color: "blue" }} />
                </div>
                <div className="cardText">
                  1356 <br />
                  TYPE2
                </div>
              </div>
            </Card>

            <Card className="card">
              <div className="itemsContainer">
                <div>
                  <FindInPageIcon style={{ fontSize: "5vw", color: "blue" }} />
                </div>
                <div className="cardText">
                  1258 <br /> TYPE3
                </div>
              </div>
            </Card>

            <Card className="card">
              <div className="itemsContainer">
                <div>
                  <ListAltIcon style={{ fontSize: "5vw", color: "blue" }} />
                </div>
                <div className="cardText">
                  534 <br /> TYPE4
                </div>
              </div>
            </Card>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div className="cardContainer">
            <Card className="card">
              <div className="itemsContainer">
                <div className="circular">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="cardText">
                  50/200 <br /> TYPE1
                </div>
              </div>
            </Card>

            <Card className="card">
              <div className="itemsContainer">
                <div>
                  <DraftsIcon style={{ fontSize: "5vw", color: "blue" }} />
                </div>
                <div className="cardText">
                  1356 <br />
                  TYPE2
                </div>
              </div>
            </Card>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PanelTab;
