import Link from "next/link";

const Index = () => (
	<div>
		<h1>안녕, Next.js</h1>
		<h2>
			<Link href="/about">
				<a>소개</a>
			</Link>
		</h2>
	</div>
);

export default Index;
