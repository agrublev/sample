import React from "react";
import {
    Button
} from "fkit";

class Sandbox extends React.Component {

    state = {
        GeekMode: false
    };

    GeekMe = () => {
        this.setState({
            GeekMode: !this.state.GeekMode
        });
    };

    render() {
        const { link } = this.props;
        return <div className="geeeeeks">
            <Button
                icon={this.state.GeekMode ? "fullscreen-exit" : "fullscreen"}
                className={"geekEnabler" + (this.state.GeekMode ? " GEEKMODE" : " ")}
                size="large" onClick={this.GeekMe}>GEEK MODE</Button>
            <iframe className={this.state.GeekMode ? "GEEKMODE" : ""}
                    id="sexyBox"
                    src={`https://codesandbox.io/embed/${link}?autoresize=1&hidenavigation=1&view=editor&codemirror=1`}
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
        </div>;
    }
};

export default Sandbox;
{/*<Button style={{ width: 100 }}*/}
{/*href="https://codesandbox.io/s/20ynwyxp2j?autoresize=1&hidenavigation=1&view=editor">*/}
{/*<img alt="Edit Fkit Form 1"*/}
{/*src="https://codesandbox.io/static/img/play-codesandbox.svg"/>*/}
{/*</Button>*/}
