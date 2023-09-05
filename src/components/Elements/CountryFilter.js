import { Input, Checkbox, Button } from "antd";
import { BsSearch } from "react-icons/bs";
import "../../assets/css/main.css";

const CountryFilter = () => {
  return (
    <div className="filter-item">
      <Input.Group compact>
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
          <Checkbox>Worldwide</Checkbox>
        </li>
        <li>
          <Checkbox>United States</Checkbox>
        </li>
        <li>
          <Checkbox>Azerbaijan</Checkbox>
        </li>
        <li>
          <Checkbox>Russia</Checkbox>
        </li>
        <li>
          <Checkbox>Turkey</Checkbox>
        </li>
        <li>
          <Checkbox>Turkey</Checkbox>
        </li>
      </ul>
    </div>
  );
};

export default CountryFilter;
