import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component{

    render(){
        return(
            <div>
<button className='backBtn' onClick={this.props.goPrev} disabled={this.props.status}>Back to previous question</button>
                <button className='backBtn' onClick={this.props.goBack}>Back to the first question</button>
                </div>
        )
    }
}


export default Footer;