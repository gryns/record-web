import React, { useState } from "react";
interface childProps {
	editChildName?: () => void;
	child: string;
}
const Child = (props: childProps) => {
	const [child] = useState("child");
	console.log("render child");

	return (
		<div>
			<p>{child}</p>
			<p>{props.child}</p>
			<div onClick={props.editChildName}>调用父方法修改父 name</div>
		</div>
	);
};
// export default Child;

/**
 * @Descripttion:React.memo 问题1  类似 pureComponent
 * @param {*}
 * @return {*}
 */
export default React.memo(Child);

/**
 * @Descripttion:问题2：  第二种参数 memo(组件 ， function) // 结果和类组件判断条件相反，
 * 类组件--shouldComponentUpdate()  true:更新 false:不更新
 * 函数组件--memo(args , func) true:不更新 false:更新
 * @param {*}
 * @return {*}
 */

// export default React.memo(Child, function (prevProps: any, nextProps: any) {
// 	if (prevProps.name !== nextProps.name) {
// 		return false;
// 	}
// 	return true;
// });

/**
 * @Descripttion: useCallback 问题三：子调父方法修改父内容，子内容不变，此时以上方法不可以了。
 * 原因：在函数式组件里每次重新渲染，函数组件都会重头开始重新执行，那么这两次创建的 callback 函数肯定发生了改变，所以导致了子组件重新渲染。
 * 解决方法：useCallback(_onClick , [])
 * @param {*}
 * @return {*}
 */

/**
 * @Descripttion:  以上方法是减少渲染，那么减少计算就需要用到useMemo
 * @param {*} 方法 useMemo(func , []) // 缓存上次计算
 * @return {*}
 */

/**
 * @Descripttion: useReducer 和 useContext
 * @param {*}
 * @return {*}
 */
