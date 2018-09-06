import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GToolbar extends Component {

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.props.setBL}
                >
                    Set BL
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.unsetBL}
                >
                    Unset BL
                </Button>
            </div>

        );
    }

}

export default GToolbar;