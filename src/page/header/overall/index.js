import React, {Component} from 'react';
import '../../../sass/base.scss';
import './index.scss'
class Overall extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="overall">
                {this.props.children}
            </div>
        );
    }
}

export default Overall;