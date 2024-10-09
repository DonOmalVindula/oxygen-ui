/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com).
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

import {fireEvent, render, screen} from '@unit-testing';
import {MouseEventHandler} from 'react';
import Button from '../Button';

describe('Button', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const {baseElement} = render(<Button />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render text correctly', () => {
    render(<Button>Oxygen UI Button</Button>);
    const element: HTMLButtonElement = screen.getByText('Oxygen UI Button');
    expect(element).toHaveTextContent('Oxygen UI Button');
  });

  it('should should handle onClick event', () => {
    const onClick: MouseEventHandler<HTMLButtonElement> = jest.fn();
    render(<Button onClick={onClick}>Oxygen UI Button</Button>);
    const element: HTMLButtonElement = screen.getByText('Oxygen UI Button');
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
