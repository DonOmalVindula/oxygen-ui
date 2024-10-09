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

import useMediaQuery from '@mui/material/useMediaQuery';
import {Theme} from '@mui/system';

/**
 * This React hook returns whether the screen is mobile or not.
 *
 * @returns - Whether the screen is mobile or not.
 */
export const useIsMobile = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down(theme.breakpoints.values.sm));
