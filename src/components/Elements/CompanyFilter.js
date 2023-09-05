import { Input, Checkbox, Button } from "antd";
import { BsSearch } from "react-icons/bs";
import "../../assets/css/main.css";

const CompanyFilter = () => {
  return (
    <div className="filter-item">
      <Input.Group compact Row>
        <Button>
          <BsSearch />
        </Button>
        <Input
          className="mb-4"
          placeholder="Search sector"
          style={{ width: "100%" }}
        />
      </Input.Group>

      <ul className="p-0">
        <li>
          <Checkbox>Administrative</Checkbox>
        </li>
        <li>
          <Checkbox>Arts & Design</Checkbox>
        </li>
        <li>
          <Checkbox>Business</Checkbox>
        </li>
        <li>
          <Checkbox>Consulting</Checkbox>
        </li>
        <li>
          <Checkbox>Customer Services & Support</Checkbox>
        </li>
        <li>
          <Checkbox>Customer Services & Support</Checkbox>
        </li>
      </ul>
    </div>
  );
};

export default CompanyFilter;
