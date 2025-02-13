/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/* eslint-disable @typescript-eslint/no-unsafe-return */

import { cclegacy } from '@base/global';
import { js, replaceProperty, markAsWarning } from '@base/utils';
import { Camera } from './camera-component';
import { ModelRenderer } from './model-renderer';
import { Renderer } from './renderer';

replaceProperty(Camera, 'Camera', [
    {
        name: 'CameraClearFlag',
        newName: 'ClearFlag',
    },
]);

replaceProperty(Camera.prototype, 'Camera.prototype', [
    {
        name: 'color',
        newName: 'clearColor',
    },
    {
        name: 'depth',
        newName: 'clearDepth',
    },
    {
        name: 'stencil',
        newName: 'clearStencil',
    },
]);

// deprecate Renderer API
markAsWarning(Renderer.prototype, 'Renderer.prototype', [
    {
        name: 'getMaterial',
        suggest: 'please use renderer.getSharedMaterial instead.',
    },
]);

/**
 * Alias of [[Camera]]
 * @deprecated Since v1.2
 */
export { Camera as CameraComponent };
cclegacy.CameraComponent = Camera;
js.setClassAlias(Camera, 'cc.CameraComponent');

/**
 * Alias of [[Renderer]]
 * @deprecated Since v3.6
 */
export { ModelRenderer as RenderableComponent };
cclegacy.RenderableComponent = ModelRenderer;
js.setClassAlias(ModelRenderer, 'cc.RenderableComponent');
