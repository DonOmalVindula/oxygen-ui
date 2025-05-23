/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import MuiTooltip from '@mui/material/Tooltip';
import type {TooltipProps as MuiTooltipProps} from '@mui/material/Tooltip';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ForwardRefExoticComponent, Ref, ReactElement} from 'react';

export type TooltipProps = MuiTooltipProps;

/**
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 *
 * Demos:
 *
 * - [Tooltip (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/data-display-tooltip)
 * - [Tooltip (MUI)](https://mui.com/material-ui/react-tooltip/)
 *
 * API:
 *
 * - [Tooltip API](https://mui.com/material-ui/api/tooltip/)
 *
 * @remarks
 * - ✔️ Props of the native component are also available.
 * - ❌ `component` prop is not supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @param props - The props for the Tooltip component.
 * @param ref - The ref to be forwarded to the MuiTooltip component.
 * @returns The rendered Tooltip component.
 */
const Tooltip: ForwardRefExoticComponent<TooltipProps> = forwardRef(
  ({className, ...rest}: TooltipProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <MuiTooltip
      ref={ref}
      className={clsx(
        /* @deprecated Use the PascalCase classname instead. https://github.com/wso2/oxygen-ui/issues/274 */
        'oxygen-tooltip',
        'OxygenTooltip-root',
        className,
      )}
      {...rest}
    />
  ),
) as ForwardRefExoticComponent<TooltipProps>;

export default Tooltip;
