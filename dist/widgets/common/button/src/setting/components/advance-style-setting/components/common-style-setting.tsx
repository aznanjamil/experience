/** @jsx jsx */
import { React, Immutable, jsx, type IntlShape, type ImmutableObject } from 'jimu-core'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { type StyleSettings, defaultMessages as jimuUIMessages, type BackgroundStyle } from 'jimu-ui'
import { BoxShadowSetting, BorderSetting, BorderRadiusSetting, BackgroundSetting } from 'jimu-ui/advanced/style-setting-components'

interface Props {
  onChange: (style: ImmutableObject<StyleSettings>) => void
  style: ImmutableObject<StyleSettings>
  intl: IntlShape
}

export default class CommonStyleSetting extends React.PureComponent<Props> {
  getStyleSettings (): ImmutableObject<StyleSettings> {
    return this.props.style ? Immutable(this.props.style) : Immutable({} as StyleSettings)
  }

  onBackgroundStyleChange = bg => {
    let background = Immutable(this.props.style?.background ?? {} as BackgroundStyle)
    for (const key in bg) {
      switch (key) {
        case 'fillType':
          if (background.fillType !== bg[key]) {
            background = background.set('fillType', bg[key])
          }
          break
        case 'color':
          background = background.set('color', bg[key])
          break
        case 'image':
          background = background.set('image', bg[key])
          break
      }
    }

    this.props.onChange(this.getStyleSettings().set('background', background))
  }

  updateBorder = bd => {
    this.props.onChange(this.getStyleSettings().set('border', bd))
  }

  updateRadius = radius => {
    this.props.onChange(this.getStyleSettings().set('borderRadius', radius))
  }

  updateShadow = shadow => {
    this.props.onChange(this.getStyleSettings().set('boxShadow', shadow))
  }

  render () {
    const style = this.props.style || Immutable({} as StyleSettings)

    return (
      <div className="common-style-setting">
        <div className="mb-4">
          <SettingRow label={this.props.intl.formatMessage({ id: 'background', defaultMessage: jimuUIMessages.background })} />
          <SettingRow role='group' aria-label={this.props.intl.formatMessage({ id: 'background', defaultMessage: jimuUIMessages.background })}>
            <BackgroundSetting background={style.background} onChange={this.onBackgroundStyleChange} />
          </SettingRow>
        </div>
        <div className="mb-4">
          <SettingRow label={this.props.intl.formatMessage({ id: 'border', defaultMessage: jimuUIMessages.border })} />
          <SettingRow role='group' aria-label={this.props.intl.formatMessage({ id: 'border', defaultMessage: jimuUIMessages.border })}>
            <BorderSetting value={style.border} onChange={this.updateBorder} />
          </SettingRow>
          <SettingRow label={this.props.intl.formatMessage({ id: 'borderRadius', defaultMessage: jimuUIMessages.borderRadius })} />
          <SettingRow role='group' aria-label={this.props.intl.formatMessage({ id: 'borderRadius', defaultMessage: jimuUIMessages.borderRadius })} >
            <BorderRadiusSetting value={style.borderRadius} onChange={this.updateRadius} />
          </SettingRow>
        </div>
        <div className="mb-4">
          <SettingRow label={this.props.intl.formatMessage({ id: 'shadow', defaultMessage: jimuUIMessages.shadow })} />
          <SettingRow role='group' aria-label={this.props.intl.formatMessage({ id: 'shadow', defaultMessage: jimuUIMessages.shadow })}>
            <BoxShadowSetting value={style.boxShadow} onChange={this.updateShadow} />
          </SettingRow>
        </div>
      </div>
    )
  }
}
