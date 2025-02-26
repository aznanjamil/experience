/** @jsx jsx */
import { React, jsx, css, type ImmutableArray, type UseDataSource, type SerializedStyles, type WidgetInitResizeCallback } from 'jimu-core'
import { type Editor as EditorType, type RenderPlugin } from 'jimu-ui/advanced/rich-text-editor'
import { EditorPlaceholder, type EditorPlaceholderProps } from './placeholder'
import { TextPlugins } from './plugins'
import { getInvalidDataSourceIds } from './utils'
const { useMemo, useCallback } = React

interface EditorProps extends Omit<EditorPlaceholderProps, 'modules' | 'plugin' | 'editorRef'> {
  widgetId: string
  onInitResizeHandler?: WidgetInitResizeCallback
  useDataSources?: ImmutableArray<UseDataSource>
  onCreate?: (editor: EditorType) => void
  onDestroy?: () => void
  value?: string
}

export const usePlugin = (widgetId: string, useDataSources: ImmutableArray<UseDataSource>, enabled: boolean, onInitResizeHandler: WidgetInitResizeCallback): RenderPlugin => {
  return React.useMemo(() => {
    return ({ editor, selection, formats }) => {
      return <TextPlugins editor={editor} selection={selection} formats={formats} widgetId={widgetId} useDataSources={useDataSources} enabled={enabled} onInitResizeHandler={onInitResizeHandler} />
    }
  }, [enabled, onInitResizeHandler, useDataSources, widgetId])
}

const INVALID_STYLE = css`
  opacity: 0.5;
  background: red;
  outline: 1px solid white;
`

export const useInvalidStyle = (value: string, useDataSources: ImmutableArray<UseDataSource>): SerializedStyles => {
  return useMemo(() => {
    // Find the invalid data source from the text
    // Because the text in config is not saved in real time,
    // so the update of invalid data source here may be delayed. [TODO]
    const dsids = getInvalidDataSourceIds(value, useDataSources)
    let expressionStyles
    if (dsids != null && dsids.length > 0) {
      expressionStyles = dsids.map(dsid => {
        return css`
          exp[data-dsid*="${dsid}"] {
           ${INVALID_STYLE}
          }
        `
      })
    }
    return css`${expressionStyles}`
  }, [value, useDataSources])
}

export const useEditorCycle = (onEditorCreate, onEditorDestroy): (editor: any) => any => {
  return useCallback(editor => {
    return editor != null ? onEditorCreate?.(editor) : onEditorDestroy?.()
  }, [onEditorCreate, onEditorDestroy])
}

export const Editor = (props: EditorProps): React.ReactElement => {
  const {
    value,
    widgetId,
    useDataSources,
    onComplete,
    onCreate: onEditorCreate,
    onDestroy: onEditorDestroy,
    onInitResizeHandler,
    enabled,
    ...others
  } = props

  const [text, setText] = React.useState(value)
  const setEditor = useEditorCycle(onEditorCreate, onEditorDestroy)
  const plugin = usePlugin(widgetId, useDataSources, enabled, onInitResizeHandler)
  const style = useInvalidStyle(text, useDataSources)

  return (
    <EditorPlaceholder
      editorRef={setEditor}
      css={style}
      value={value}
      plugin={plugin}
      onChange={setText}
      onComplete={onComplete}
      enabled={enabled}
      {...others}
    />
  )
}
