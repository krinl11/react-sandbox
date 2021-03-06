import React from 'react'
import Toggler from './Toggler'

class Person extends React.PureComponent {
  // predefining some state for the component
  state = {
    isSelected: false
  }

  // an example internal function that sets the local state to true
  toggleSelected = () => this.setState({ isSelected: !this.state.isSelected })

  // every react class must have a render method, which should return a single wrapping element
  render() {
    let { name } = this.props
    let { isSelected } = this.state

    // inside this, we embed an example of a stateless component, that simply takes props from upstream (here)
    return (
      <p className="person">
        Hi, { name }, welcome to React!  Currently you
        <Toggler value={isSelected} clickHandler={this.toggleSelected} />
        selected.
      </p>
    )
  }
}

export default Person
