/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

'use strict'; // For compatibility with (let, const, function, class);

import ArgumentException from './ArgumentException';


const NAME:string = 'ArgumentNullException';

export default
class ArgumentNullException extends ArgumentException
{
	constructor(
		paramName:string,
		message:string = '',
		innerException:Error = null)
	{
		super(paramName, message, innerException);
	}

	protected getName():string
	{
		return NAME;
	}

}
