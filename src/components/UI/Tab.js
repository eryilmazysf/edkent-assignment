import React from "react";
import DraftsIcon from "@material-ui/icons/Drafts";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { Card, Col } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ListAltIcon from "@material-ui/icons/ListAlt";

const PanelTab = () => {
  const { TabPane } = Tabs;
  const percentage = 85;
  return (
    <div style={{ marginTop: "1rem" }}>
      <Tabs type="card" size="large" style={{ height: "200px" }}>
        <TabPane tab="Tab 1" key="1">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    50/200 <br /> TYPE 1
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <DraftsIcon style={{ fontSize: "50px", color: "blue" }} />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    1356 <br /> TYPE 2
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <FindInPageIcon
                      style={{ fontSize: "50px", color: "blue" }}
                    />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    1258 <br /> TYPE 3
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <ListAltIcon style={{ fontSize: "50px", color: "blue" }} />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    534 <br /> TYPE 4
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    50/200 <br /> TYPE 1
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  margin: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "20%", height: "20%" }}>
                    <DraftsIcon style={{ fontSize: "50px", color: "blue" }} />
                  </div>
                  <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    1356 <br /> TYPE 2
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PanelTab;
