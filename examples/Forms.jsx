import React from "react";
import ReactDOM from "react-dom";
import {
    Form,
    Card,
    Input,
    // TextArea,
    // InputNumber,
    // Search,
    // Collapse,
    // Radio,
    Icon,
    Button,
    // Grid,
    Divider
} from "fkit";
import FormMdx from "../../../components/Form/Form.mdx";
import FormExample from "../../../components/Form/FormExample.mdx";
import Sandbox from "./Sandbox";

// const { Panel } = Collapse;
// const { Row, Col } = Grid;
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            } else {
                return false;
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 }
        };
        return (
            <Form
                // style={{ maxWidth: "500px" }}
                onSubmit={this.handleSubmit}>
                <h1>Forms</h1>
                <Sandbox link="3yjnynxy75"/>
<Divider/>

                <Sandbox link="20ynwyxp2j"/>
                {/*<FormItem*/}
                {/*hasFeedback*/}
                {/*{...formItemLayout}*/}
                {/*label="Email"*/}
                {/*>*/}
                {/*{getFieldDecorator("email", {*/}
                {/*rules: [{*/}
                {/*required: true, message: "Please input your username!"*/}
                {/*}, {*/}
                {/*min: 7,*/}
                {/*message: "Must be greater than 7 chars"*/}
                {/*}, {*/}
                {/*type: "email",*/}
                {/*message: "Valid email"*/}
                {/*}]*/}
                {/*})(*/}
                {/*<Input prefix={<Icon type="mail"*/}
                {/*theme={"outlined"}*/}
                {/*style={{ color: "#c0c0c0" }}/>}*/}
                {/*placeholder="Username"/>*/}
                {/*)}*/}
                {/*</FormItem>*/}
                {/*<FormItem label="Search">*/}
                {/*<Search/>*/}
                {/*<InputNumber*/}
                {/*style={{ width: "200px" }}*/}
                {/*formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}*/}
                {/*parser={value => value.replace(/\$\s?|(,*)/g, "")}*/}
                {/*/>*/}
                {/*</FormItem>*/}
                {/*<FormItem label="Choose">*/}
                {/*<Radio.Group name="chosen">*/}
                {/*<Radio value={1}>A</Radio>*/}
                {/*<Radio value={2}>B</Radio>*/}
                {/*<Radio value={3}>C</Radio>*/}
                {/*<Radio value={4}>D</Radio>*/}
                {/*</Radio.Group>*/}
                {/*</FormItem>*/}
                {/*<FormItem*/}
                {/*{...formItemLayout}*/}
                {/*label="Password"*/}
                {/*>*/}
                {/*{getFieldDecorator("password", {*/}
                {/*rules: [{*/}
                {/*required: true,*/}
                {/*message: "Please input your Password!"*/}
                {/*}]*/}
                {/*})(*/}
                {/*<Input*/}
                {/*addonAfter=".com"*/}
                {/*addonBefore={<Icon type="lock"*/}
                {/*style={{ color: "rgba(0,0,0,.25)" }}/>}*/}
                {/*type="password"*/}
                {/*placeholder="Password"/>*/}
                {/*)}*/}
                {/*</FormItem>*/}
                {/*<FormItem label="Text entry">*/}
                {/*<TextArea defaultValue="Isajdoasjiod"/>*/}
                {/*</FormItem>*/}
                {/*<FormItem>*/}
                {/*<Button*/}
                {/*type="primary"*/}
                {/*block={true}*/}
                {/*size="large"*/}
                {/*htmlType="submit"*/}
                {/*disabled={hasErrors(getFieldsError())}*/}
                {/*>*/}
                {/*Log in*/}
                {/*</Button>*/}
                {/*</FormItem>*/}
            </Form>
        );
    }
}

const FormInner = Form.create()(HorizontalLoginForm);

const FormWrap = () => {
    return <div className="exampleWrap">
        <Card space="large">
            <FormInner/>
            <Divider/>
            {/*<Collapse>*/}
            {/*<Panel header="Code Example">*/}
            {/*<FormExample/>*/}
            {/*</Panel>*/}
            {/*</Collapse>*/}
        </Card>
        <Divider/>
        <FormMdx/>
    </div>;
};

export default FormWrap;
