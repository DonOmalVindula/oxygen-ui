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

import {render} from '@unit-testing';
import Code from '../Code';

describe('Code', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Code>Code Block</Code>);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const {baseElement} = render(<Code>Code Block</Code>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should have the correct class name', () => {
    const {container} = render(<Code>Code Block</Code>);
    expect(container.firstChild).toHaveClass('oxygen-code');
  });

  it('should have the correct text', () => {
    const {container} = render(<Code>Code Block</Code>);
    expect(container.firstChild).toHaveTextContent('Code Block');
  });

  it('applies the "filled" style when the "filled" prop is true', () => {
    const {container} = render(<Code filled>Code Block</Code>);
    expect(container.firstChild).toHaveClass('filled');
  });

  it('applies the "outlined" style when the "outlined" prop is true', () => {
    const {container} = render(<Code outlined>Code Block</Code>);
    expect(container.firstChild).toHaveClass('outlined');
  });
});
