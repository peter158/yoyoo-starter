/**
 *  created by yaojun on 2018/11/6
 *
 */
import React from 'react'
import './Header.scss'
import HeaderAlignment from './HeaderAlignment'
import HistoryControl from './HistoryControl'
import HeaderCoverage from './HeaderCoverage'
import HeaderSave from './HeaderSave'
import HeaderPlay from './HeaderPlay'
import HeaderUser from './HeaderUser'
import HeaderPanToCenter from './HeaderPanToCenter'
import HeaderGuides from './HeaderGuides'
import EditableLabel from '../lib/ui/EditableLabel'
import Event from '../lib/Base/Event'
import { refresh_project_name } from '../lib/util/actions'
import { updateProject } from '../api/project'
import qs from 'query-string'
import HeaderShare from '@/components/HeaderShare'
import HeaderSettings from '@/components/HeaderSettings'
import HeaderExport from '@/components/HeaderExport'
import HeaderGroupControl from '@/components/HeaderGroupControl'

class ProjectName extends React.Component {
  state = {
    name: '',
  }
  handleChange = (v) => {
    this.setState({ name: v })
  }

  componentWillMount() {
    Event.listen(refresh_project_name, this.handleChange)
  }

  componentWillUnmount() {
    Event.destroy(refresh_project_name, this.handleChange)
  }

  handleUpdate = (v) => {
    let query = qs.parse(location.search)
    updateProject({ id: query.p, name: v }).then((res) => {
      this.handleChange(v)
    })
  }

  render() {
    return <EditableLabel onChange={this.handleUpdate} className={'header_name'} value={this.state.name} />
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <div className={'root-layout-header'}>
        <div className={'header_project'}>
          <ProjectName />
        </div>
        <div className={'header_functions text-left'}>
          <HistoryControl />
        </div>
        <div className={'header_functions'}>
          <HeaderGroupControl />
          <HeaderAlignment />
          <HeaderCoverage />
          <HeaderPanToCenter />
          <HeaderGuides />
        </div>
        <div className={'header_user'}>
          <HeaderExport />
          <HeaderUser />
        </div>
      </div>
    )
  }
}
