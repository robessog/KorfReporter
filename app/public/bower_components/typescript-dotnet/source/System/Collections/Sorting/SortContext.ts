/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

///<reference path="../../FunctionTypes.d.ts"/>
///<reference path="../../IComparer.d.ts"/>
///<reference path="../Array/IArray.d.ts"/>
///<reference path="Order.d.ts"/>
'use strict'; // For compatibility with (let, const, function, class);

import * as Values from '../../Compare'
import Integer from '../../Integer'
import forEach from "../Enumeration/forEach"

export default
class SortContext<T> implements IComparer<T>
{

	/**
	 * Direction of the comparison.
	 * @type {Order}
	 */
	get order():Order
	{ return this._order; }

	constructor(
		protected _next:IComparer<T>,
		protected _comparer:Comparison<T> = Values.compare,
		protected _order:Order = Order.Ascending)
	{
	}


	/**
	 * Generates an array of indexes from the source in order of their expected sort without modifying the source.
	 * @param source
	 * @returns {number[]}
	 */
	generateSortedIndexes(source:T[]):number[]
	{
		if(source==null) return [];
		var result:number[] = source.map((s, i)=>i);
		result.sort((a, b) => this.compare(source[a], source[b]));
		return result;
	}

	/**
	 * Compares two values based upon SortContext parameters.
	 * @param a
	 * @param b
	 * @returns {any}
	 */
	compare(a:T, b:T):number
	{
		var _ = this;
		var d = _._comparer(a, b);
		if(d==0 && _._next) return _._next.compare(a, b);
		return _._order*d;
	}
}
