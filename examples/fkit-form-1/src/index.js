import React from "react";
import ReactDOM from "react-dom";
import "fkit-secret/build.css";
import { Form, Icon, Input, Button } from "fkit-secret";
const FormItem = Form.Item;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(
		field => fieldsError[field]
	);
}

class HorizontalLoginForm extends React.Component {
	componentDidMount() {
		// To disabled submit button at the beginning.
		this.props.form.validateFields();
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(
					"Received values of form: ",
					values
				);
			}
		});
	};

	render() {
		const {
			getFieldDecorator,
			getFieldsError,
			getFieldError,
			isFieldTouched
		} = this.props.form;

		// Only show error after a field is touched.
		const userNameError =
			isFieldTouched("userName") &&
			getFieldError("userName");
		const passwordError =
			isFieldTouched("password") &&
			getFieldError("password");
		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<FormItem
					validateStatus={userNameError ? "error" : ""}
					help={userNameError || ""}
				>
					{getFieldDecorator("userName", {
						rules: [
							{
								required: true,
								message:
									"Please input your username!"
							}
						]
					})(
						<Input
							prefix={
								<Icon
									type="user"
									style={{
										color: "rgba(0,0,0,.25)"
									}}
								/>
							}
							placeholder="Username"
						/>
					)}
				</FormItem>
				<FormItem
					validateStatus={passwordError ? "error" : ""}
					help={passwordError || ""}
				>
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message:
									"Please input your Password!"
							}
						]
					})(
						<Input
							prefix={
								<Icon
									type="lock"
									style={{
										color: "rgba(0,0,0,.25)"
									}}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</FormItem>
				<FormItem>
					<Button
						type="primary"
						htmlType="submit"
						disabled={hasErrors(getFieldsError())}
					>
						Log in NO PETAR!
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(
	HorizontalLoginForm
);
ReactDOM.render(
	<div>
		<WrappedHorizontalLoginForm />
	</div>,
	document.getElementById("container")
);
