import React from 'react'
import PropTypes from 'prop-types'

const withPlaceholder = WrappedComponent => (props) => (
        <WrappedComponent
            placeholder='Mon identifiant'
            { ...props }
        />
    // class HOC extends Component {
    //     render() {
    //         console.log('HOC')
    //         return (
    //             <WrappedComponent
    //                 placeholder='Mon HOC'
    //                 { ...this.props } />
    //         )
    //     }
    // }
)

withPlaceholder.prototype = {
        props: PropTypes.object.isRequired
}

export default withPlaceholder