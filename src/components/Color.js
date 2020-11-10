import React, { Component } from 'react'

const ColorContext = React.createContext() // provider

class ColorProvider extends Component {
    state = {
        color: 'orange'
    }

    render() {
        return (
            <ColorContext.Provider
                value={{
                    state: this.state
                }}>
                { this.props.children }
            </ColorContext.Provider>
        )
    }
}

export { ColorContext }

export default ColorProvider