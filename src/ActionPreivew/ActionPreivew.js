import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionPreivew.module.scss';

export  class ActionPreview extends React.Component {
  state = {
    action: null,
    num: 1
  }
  componentDidMount() {
    //console.log('details', this.props);
    //console.log('details this.props.action', this.props.action);
    const action = this.props.action
    this.setState({ action }, () => {
      //console.log('details this.state.action', this.state.action, this.state)
    }
    )

  }
  render() {
    const { action } = this.state;

    return action && <div>
                {action}
              </div>
  }
}

// ActionPreivew.propTypes = {};

// ActionPreivew.defaultProps = {};

