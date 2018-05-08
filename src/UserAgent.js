import React from 'react'
import { connect } from 'react-redux'

import { loadUA } from './actions'

export class UserAgent extends React.Component {

  componentDidMount () {
    this.props.loadUA()
  }

  render () {

    if (this.props.isFetching) {
      return <span>Loading...</span>
    }

    if (this.props.error) {
      return <span>Erro...</span>
    }

    return (
      <span>User Agent: {this.props.data['user-agent']}</span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUA: () => dispatch(loadUA())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)