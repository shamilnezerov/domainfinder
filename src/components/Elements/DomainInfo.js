import { Card, Tabs } from "antd";
import { CardTitle } from "../../StyledComponents";
import TabTableComponent from "../../components/Elements/TabTableComponent";

const DomainInfo = () => {
  return (
    <Card className="DomainInfo">
      <CardTitle>Who is</CardTitle>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Domain Information" key="1">
          <TabTableComponent />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Registrant Contact" key="2">
          <TabTableComponent />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Administrative Contact" key="3">
          <TabTableComponent />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Administrative Contact" key="4">
          <TabTableComponent />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};

export default DomainInfo;
