import { Link } from "react-router-dom"
export default function Home() {
	return (
		<div>
			<p>home</p>
			<Link to="/my">to my</Link>
			<div onClick={() => {}}>edit color</div>
		</div>
	)
}
