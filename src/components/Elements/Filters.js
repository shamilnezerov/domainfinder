import { Collapse } from "antd";
import CompanyFilter from "../Elements/CompanyFilter";
import CountryFilter from "./CountryFilter";
import "../../assets/css/main.css";

const { Panel } = Collapse;

const Filters = () => {
  return (
    <Collapse defaultActiveKey={["1", "2", "3"]} ghost>
      <Panel header="Company Sectors" key="1">
        <CompanyFilter />
      </Panel>
      <Panel header="Country" key="2">
        <CountryFilter />
      </Panel>
      <Panel header="Country" key="3">
        <CountryFilter />
      </Panel>
    </Collapse>
  );
};

export default Filters;
