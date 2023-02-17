import { Button, VStack, Spinner, Input } from '@rapid-web/ui';
import './index.css'
function App() {
	return (
		<div>
			<VStack spacing='lg'>
				<h1 className='theme-test'>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
			</VStack>
			<Input />
			<Button isLoading>Hello world</Button>
			<Spinner size='md' />
		</div>
	);
}

export default App;
