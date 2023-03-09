import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	Button,
	VStack,
	Spinner,
	Input,
	MenuButton,
	MenuItem,
	MenuItems,
	Menu,
	Textarea,
	Select,
	Option,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalTitle,
	Text,
	Tooltip,
	Switch,
	Skeleton,
	SkeletonText,
	SelectIcon,
	HStack,
	Container,
	Heading,
} from '@rapid-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faGear,
	faBook,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isEnabled, setIsEnabled] = useState(false);
	return (
		<Container>
			<Heading styles='text-center'>Rapid Components</Heading>

			<br />

			<Text>Skeleton & SkeletonText</Text>
			<div className='w-56'>
				<Skeleton speed='skeleton-pulse-fast' />
				<SkeletonText lineSpacing='md' styles='rounded-sm mt-12' />
			</div>

			<br />

			<Text>HStack</Text>
			<HStack spacing='lg'>
				<div>Element 1</div>
				<div>Element 2</div>
				<div>Element 3</div>
			</HStack>

			<br />

			<Text>Tooltip</Text>
			<Tooltip label='Hi, I am a tooltip!'>
				<Button variant='ghost'>Hover over me 🙂</Button>
			</Tooltip>

			<br />

			<Text>Spinner</Text>
			<Spinner size='md' />

			<br />

			<Text>Input</Text>
			<Input />

			<br />

			<Text>Textarea</Text>
			<div className='mt-12'>
				<Textarea />
			</div>

			<br />

			<Text>Select</Text>
			<Select styles='w-56'>
				<Option value='Test'>Test</Option>
				<Option value='Test'>Test</Option>
				<SelectIcon />
			</Select>

			<br />

			<Text>Modal</Text>
			<Button styles='w-max' onClick={() => setIsOpen(true)}>
				Open Modal
			</Button>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<ModalOverlay />
				<ModalContent styles='flex flex-col'>
					<ModalTitle>Delete Account</ModalTitle>

					<Text styles='mt-2 text-secondaryGrey'>
						Are you sure you want to delete your account? All of
						your data will be permanently removed. This action
						cannot be undone.
					</Text>
					<div className='self-end'>
						<Button
							styles='mt-4 mr-2'
							variant='outline'
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</Button>
						<Button styles='mt-4' onClick={() => setIsOpen(false)}>
							Deactivate
						</Button>
					</div>
				</ModalContent>
			</Modal>

			<br />

			<Text>Switch</Text>
			<Switch
				enabled={isEnabled}
				onChange={(value) => setIsEnabled(value)}
				size='md'
			/>

			<br />
		</Container>
	);
}

export default App;
