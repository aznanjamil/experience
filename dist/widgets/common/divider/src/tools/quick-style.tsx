import {
  type extensionSpec,
  type React,
  appActions,
  getAppStore,
  type LayoutContextToolProps,
  Immutable,
  i18n
} from 'jimu-core'
import { defaultMessages } from 'jimu-ui'

export default class QuickStyle implements extensionSpec.ContextToolExtension {
  index = 2
  id = 'button-quick-style'
  widgetId: string

  visible (props: LayoutContextToolProps) {
    return true
  }

  getGroupId () {
    return null
  }

  getTitle () {
    const intl = i18n.getIntl('_jimu')
    return intl
      ? intl.formatMessage({
        id: 'quickStyle',
        defaultMessage: defaultMessages.quickStyle
      })
      : 'Quick style'
  }

  checked (props: LayoutContextToolProps) {
    const widgetId = props.layoutItem.widgetId
    const widgetState =
      getAppStore().getState().widgetsState[widgetId] || Immutable({})
    return !!widgetState.showQuickStyle
  }

  getIcon () {
    return require('jimu-ui/lib/icons/design.svg')
  }

  onClick (props: LayoutContextToolProps) {
    const widgetId = props.layoutItem.widgetId
    const widgetState =
      getAppStore().getState().widgetsState[widgetId] || Immutable({})
    const showQuickStyle = !widgetState.showQuickStyle

    getAppStore().dispatch(appActions.widgetStatePropChange(widgetId, 'showQuickStyle', showQuickStyle))
  }

  getSettingPanel (): React.ComponentClass<unknown> {
    return null
  }
}
