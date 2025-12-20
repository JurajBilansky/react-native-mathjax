import { MJContextMenu } from '../menu/MJContextMenu.js';
import { SelectionOrder, SelectionGrid, SelectionBox } from '../../../node_modules/mj-context-menu/js/selection_box.js';
export { SelectionOrder, SelectionGrid } from '../../../node_modules/mj-context-menu/js/selection_box.js';
export type selection = {
    title: string;
    values: string[];
    variable: string;
};
export declare class SelectionDialog extends SelectionBox {
    constructor(title: string, signature: string, selections: selection[], order: SelectionOrder, grid: SelectionGrid, menu: MJContextMenu);
    post(): void;
    display(): void;
}
