import { Table } from "antd";
import PropTypes from "prop-types";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";

export default function TableExample1({ dataSource }) {

  const column = [
    {
      title: (
        <span>
          <UserOutlined /> Name
        </span>
      ),
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: (
        <span>
          <CalendarOutlined /> Age
        </span>
      ),
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: (
        <span>
          <UserOutlined /> Gender
        </span>
      ),
      dataIndex: "gender",
      key: "gender",
      width: 100,
    },
    {
      title: (
        <span>
          <UserOutlined /> Address
        </span>
      ),
      dataIndex: "address",
      key: "address",
      width: 100,
    },
  ];

//   const dataSourceTable = dataSource.map((data) => ({
//     name: data.name,
//     age: data.age,
//     gender: data.gender,
//     address: data.address,
//     key: data.id,
//   }));

  return (
    <Table
      style={{ width: 800 }}
      columns={column}
    //   dataSource={dataSourceTable}
    ></Table>
  );
}

TableExample1.propTypes = {
  dataSource: PropTypes.array.isRequired,
};
