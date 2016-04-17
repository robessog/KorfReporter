/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
export default function shallowCopy(source, target = {}) {
    if (target) {
        for (let k in source) {
            target[k] = source[k];
        }
    }
    return target;
}
//# sourceMappingURL=shallowCopy.js.map