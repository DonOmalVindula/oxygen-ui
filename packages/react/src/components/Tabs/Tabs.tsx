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

import MuiTabs from '@mui/material/Tabs';
import type {TabsProps as MuiTabsProps, TabsTypeMap} from '@mui/material/Tabs';
import clsx from 'clsx';
import {forwardRef, ForwardRefExoticComponent} from 'react';
import type {ElementType, Ref, ReactElement} from 'react';
import Box from '../Box';
import Divider from '../Divider';

export type TabsProps<
  C extends ElementType = ElementType,
  D extends ElementType = TabsTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiTabsProps<D, P>, 'component'>;

/**
 * The Skeleton displays a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
 *
 * Demos:
 *
 * - [Skeleton (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/feedback-skeleton)
 * - [Skeleton (MUI)](https://mui.com/material-ui/react-skeleton/)
 *
 * API:
 *
 * - [Skeleton API](https://mui.com/material-ui/api/skeleton/)
 *
 * @remarks
 * - ✔️ Props of the native component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @deprecated Use the `Tab` component directly from `@oxygen-ui/react/Tab` instead.
 * Tracker: https://github.com/wso2/oxygen-ui/issues/340
 *
 * @template C - The type of the component.
 * @param props - The props for the Skeleton component.
 * @param ref - The ref to be forwarded to the MuiSkeleton component.
 * @returns The rendered Skeleton component.
 */
const Tabs: ForwardRefExoticComponent<TabsProps> = forwardRef(
  <C extends ElementType = ElementType>({className, ...rest}: TabsProps<C>, ref: Ref<HTMLDivElement>): ReactElement => (
    <Box
      className={clsx(
        /* @deprecated Use the PascalCase classname instead. https://github.com/wso2/oxygen-ui/issues/274 */
        'oxygen-tabs',
        'OxygenTabs-root',
        className,
      )}
    >
      {/* @ts-ignore */}
      <MuiTabs ref={ref} {...rest} />
      <Divider />
    </Box>
  ),
) as unknown as ForwardRefExoticComponent<TabsProps>;

export default Tabs;
