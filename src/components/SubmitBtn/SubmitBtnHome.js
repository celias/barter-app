import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubmitBtnHome extends Component {
    render(){
        return(
            <div>
                <div>
                  
                    <Link to="/">
                        <button>Submit</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default SubmitBtnHome;