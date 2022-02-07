import { Component } from "react";
import { CopyBlock, atomOneDark } from 'react-code-blocks';
import mock from './../../../mock/mock_code.js';


class ComponentExample extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <>
                <h5>Initialize a React.Component</h5>
                <div>
                    <CopyBlock
                        language={'jsx'}
                        text={mock.reactComponent}
                        showLineNumbers={true}
                        theme={atomOneDark}
                        wrapLines={true}
                        codeBlock
                    />
                </div>

                <h5>
                    Important methods
                </h5>

                <CopyBlock
                    language={'jsx'}
                    text={mock.reactComponent}
                    showLineNumbers={true}
                    theme={atomOneDark}
                    wrapLines={true}
                    codeBlock
                />

            </>
        )
    }
}

export default ComponentExample