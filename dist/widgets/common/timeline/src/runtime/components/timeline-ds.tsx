/** @jsx jsx */
import {
  React, jsx, DataSourceComponent, type IMUseDataSource, type DataSource, DataSourceStatus
} from 'jimu-core'

interface DataSourceProps {
  useDataSource: IMUseDataSource
  onIsDataSourceNotReady: (dataSourceId: string, dataSourceStatus: DataSourceStatus) => void
  onCreateDataSourceCreatedOrFailed: (dataSourceId: string, dataSource: DataSource) => void
}

export default class TimelineDataSource extends React.PureComponent<DataSourceProps> {
  componentWillUnmount () {
    this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, null)
    this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId, DataSourceStatus.NotReady)
  }

  onDataSourceCreated = (ds) => {
    this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, ds)
  }

  onCreateDataSourceFailed = () => {
    this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, null)
  }

  onDataSourceInfoChange = (info) => {
    this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId, info?.status)
  }

  render () {
    const { useDataSource } = this.props
    return (
      <DataSourceComponent
        useDataSource={useDataSource}
        onDataSourceCreated={this.onDataSourceCreated}
        onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        onDataSourceInfoChange={this.onDataSourceInfoChange}
      />
    )
  }
}
