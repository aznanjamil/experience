/// <reference types="react" />
import { React, ReactRedux, type IMHistoryState } from 'jimu-core';
interface ExtraProps {
    currentPageId: string;
    stateHistory?: IMHistoryState;
}
declare class BuilderKeyboardComponentInner extends React.PureComponent<ExtraProps, unknown> {
    isSupportKeyboard: () => boolean;
    switchAppMode: () => void;
    undo: () => void;
    redo: () => void;
    onKeyboardTrigger: (event: KeyboardEvent) => void;
    isMac: () => boolean;
    render(): React.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof BuilderKeyboardComponentInner, {
    ref?: React.LegacyRef<BuilderKeyboardComponentInner>;
    key?: React.Key;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown>;
}>;
export default _default;
