import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  loadContributions,
  updateSelectedYear,
  updateSelectedEntity } from '../actions'
import RepoSelector from '../components/RepoSelector'
import ExportPanel from '../components/ExportPanel'

export class RepoSelectorContainer extends React.Component {
  static propTypes = {
    loadContributions: PropTypes.func.isRequired,
    updateSelectedYear: PropTypes.func.isRequired,
    updateSelectedEntity: PropTypes.func.isRequired,
    entity: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    loadingYears: PropTypes.bool
  }

  render () {
    const yearOptions = this.props.yearOptions.map((year) => {
      return {value: year, text: year}
    })
    return (
      <div>
        <RepoSelector
          submitRepoChanges={this.props.loadContributions}
          updateSelectedYear={this.props.updateSelectedYear}
          updateSelectedEntity={this.props.updateSelectedEntity}
          entity={this.props.entity}
          year={this.props.year}
          yearOptions={yearOptions}
          loadingYears={this.props.loadingYears} />
        <ExportPanel />
      </div>
    )
  }
}

const actions = {
  loadContributions,
  updateSelectedYear,
  updateSelectedEntity
}

function mapStateToProps (state) {
  return {
    entity: state.entity,
    year: state.year,
    yearOptions: state.yearOptions,
    loadingYears: state.loadingYears
  }
}

export default connect(mapStateToProps, actions)(RepoSelectorContainer)
