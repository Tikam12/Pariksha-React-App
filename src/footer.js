import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div class="bg-info mt-5" style={{minHeight:'10vh'}}>
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
                    <div class="col-md-4 d-flex align-items-center">
                        <span class="mb-3 mb-md-0">&copy; 2024 Tc Choudhary</span>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer;