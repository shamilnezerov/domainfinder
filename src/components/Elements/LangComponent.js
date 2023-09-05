import { Dropdown, Menu, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        label: (
          <a className="lang-item" rel="noopener noreferrer" href="/az">
            AZ
          </a>
        ),
        key: "0",
      },
      {
        label: (
          <a rel="noopener noreferrer" href="/ru">
            RU
          </a>
        ),
        key: "1",
      },
    ]}
  />
);

const LangComponent = () => {
  return (
    <div className="lang text-center text-md-end">
      Languages:
      <Dropdown overlay={menu} placement="top">
        <a href="/en" onClick={(e) => e.preventDefault()}>
          <Space>
            EN
            <CaretDownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default LangComponent;
