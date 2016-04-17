/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

///<reference path="../Array/IArray.d.ts"/>
'use strict'; // For compatibility with (let, const, function, class);

import IndexEnumerator from './IndexEnumerator';
import Type from '../../Types';

export default
class ArrayEnumerator<T> extends IndexEnumerator<T>
{
	constructor(arrayFactory:() => IArray<T>, start?:number, step?:number);
	constructor(array:IArray<T>, start?:number, step?:number);
	constructor(arrayOrFactory:any, start:number = 0, step:number = 1)
	{
		super(
			() =>
			{
				var array = Type.isFunction(arrayOrFactory) ? arrayOrFactory() : arrayOrFactory;
				return {source: array, pointer: start, length: (array ? array.length : 0), step: step};
			}
		);
	}
}

