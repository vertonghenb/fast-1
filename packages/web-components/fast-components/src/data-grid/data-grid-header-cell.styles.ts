import { css } from "@microsoft/fast-element";
import { neutralForegroundRestBehavior } from "../styles/recipes";
import { SystemColors } from "@microsoft/fast-web-utilities";
import { forcedColorsStylesheetBehavior } from "@microsoft/fast-foundation";

export const DataGridHeaderCellStyles = css`
    :host {
        padding: calc(var(--design-unit) * 1px) calc(var(--design-unit) * 3px);
        color: ${neutralForegroundRestBehavior.var};
        box-sizing: border-box,
        font-family: var(--body-font);
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        font-weight: 600;
        border: transparent calc(var(--outline-width) * 1px) solid;
        overflow: hidden;
        white-space: nowrap;
    }

`.withBehaviors(
    neutralForegroundRestBehavior,
    forcedColorsStylesheetBehavior(
        css`
            :host {
            }
        `
    )
);
