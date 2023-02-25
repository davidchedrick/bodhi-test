import Page from "@/components/Page";
import TestPage from "@/components/cat";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Page>
			<Component {...pageProps} />
			<TestPage />
		</Page>
	);
}
