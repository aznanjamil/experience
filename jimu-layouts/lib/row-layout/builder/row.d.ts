/// <reference types="react" />
/** @jsx jsx */
import { React, type LayoutInfo, type LayoutItemJson, type LayoutItemConstructorProps, type IMLayoutJson, type IMThemeVariables, type IMAppConfig } from 'jimu-core';
import { type LayoutProps, type RowLayoutSetting } from 'jimu-layouts/layout-runtime';
import type { DropHandlers } from '../../builder/types';
import { CanvasPane } from '../../builder/interactive/canvas-pane';
import { type ChildRect, type IMChildRect } from '../types';
type RowLayoutProps = LayoutProps & {
    layout: IMLayoutJson;
    transformedLayout: IMLayoutJson;
    isMultiRow: boolean;
    children?: React.ReactNode;
};
interface State {
    isResizing: boolean;
    updatingRects: IMChildRect[];
    isDragoverCenter: boolean;
}
export declare class Row extends React.PureComponent<RowLayoutProps, State> implements DropHandlers {
    ref: HTMLElement;
    guideDragOverRef: HTMLCanvasElement;
    canvasPane: CanvasPane;
    boundingRect: ClientRect;
    childRects: ChildRect[];
    flippedChildRects: ChildRect[];
    domRect: ClientRect;
    resizingRect: ClientRect;
    referenceId: string;
    colWidth: number;
    dragInsertPos: number;
    space: number;
    flowLayoutId: string;
    maxPageWidth: number;
    builderTheme: IMThemeVariables;
    flipLeftRight: boolean;
    state: State;
    constructor(props: any);
    componentDidMount(): void;
    handleItemResizeStart: (id: string) => void;
    handleItemResizing: (id: string, x: number, y: number, dw: number, dh: number) => void;
    handleItemResizeEnd: (id: string, x: number, y: number, dw: number, dh: number, layoutItem: LayoutItemJson) => void;
    handleToggleDragoverCenterEffect: (value: boolean) => void;
    handleDragOver: (draggingItem: LayoutItemConstructorProps, draggingElement: HTMLElement, containerRect: Partial<ClientRect>, itemRect: Partial<ClientRect>, clientX: number, clientY: number) => void;
    handleDragEnter: () => void;
    handleDragLeave: () => void;
    getConfig(): RowLayoutSetting;
    reCalculateRects(draggingItem: LayoutItemConstructorProps, containerRect: Partial<ClientRect>, itemRect: Partial<ClientRect>, clientX: number): IMChildRect[];
    handleDrop: (draggingItem: LayoutItemConstructorProps, containerRect: ClientRect, itemRect: ClientRect) => void;
    calDropPosition(appConfig: IMAppConfig, draggingItem: LayoutItemConstructorProps, containerRect: ClientRect, itemRect: ClientRect, isPaste: boolean): {
        addedItemRect: ClientRect;
        insertIndex: number;
        appConfig: IMAppConfig;
    };
    isInRow(layoutInfo: LayoutInfo): boolean;
    collectBounds(): ChildRect[];
    createItem(childRects: ChildRect[], index: number): JSX.Element;
    render(): JSX.Element;
}
export {};
