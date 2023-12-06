import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";

export default function TestingForm() {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <Form {...layout}>
      <Form.Item label="Name">
        <Input placeholder="Input member name"></Input>
      </Form.Item>
      <Form.Item label="Age">
        <Input placeholder="Input member Age"></Input>
      </Form.Item>
      <Form.Item label="Address">
        <Input placeholder="Input member Address"></Input>
      </Form.Item>
      <Row gutter={24} style={{ marginRight: "5px" }}>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            icon={<PlusOutlined style={{ marginTop: 5 }} />}
            type="primary"
            htmlType="submit"
            block
            style={{ marginTop: 30 }}
          >
            Add Member
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
