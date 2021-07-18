import React from 'react'
import Control from './sub-components/Control'

function Header(){
    return(
        <header>
            <div className="site-heading"><h1>Ecommerce</h1></div>
            <div className="site-controls">
                <Control details ={{controlType: "select", filterType:"price"}}/>
                <Control details ={{controlType: "select", filterType:"type"}}/>
                <Control details ={{controlType: "checkbox", filterType:"brand"}}/>
                <Control details ={{controlType: "checkbox", filterType:"color"}}/>
            </div>

        </header>
    );
}

export default Header