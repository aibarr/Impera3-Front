import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GToolbar extends Component {

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    color="primary"
                >
                    Set BL
                </Button>
                <Button>
                    Unset BL
                </Button>
            </div>

        );
    }

}

export default GToolbar;