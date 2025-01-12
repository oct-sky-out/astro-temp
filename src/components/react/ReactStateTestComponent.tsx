import React from 'react';
import { Button } from '@material-tailwind/react';
import { useStore } from '@nanostores/react';
import { countNumber as countNumberAtom } from '@/store/counter';

const ReactStateTestComponent = () => {
	const countNumber = useStore(countNumberAtom);
	const [count, setCount] = React.useState(0);

	return (
		<div className='flex flex-col space-y-4 p-10'>
			<div className='flex space-x-3 border p-4 border-gray-300 rounded-lg justify-center align-middle'>
				<h1 className='text-2xl font-bold'>
					React State Test Component (useState)
				</h1>
				<span>useState number : {count}</span>
				<Button onClick={() => setCount((beforeCount) => beforeCount + 1)}>
					Plus
				</Button>
				<Button onClick={() => setCount((beforeCount) => beforeCount - 1)}>
					Minus
				</Button>
			</div>
			<div className='flex space-x-3 border p-4 border-gray-300 rounded-lg justify-center align-middle'>
				<h1 className='text-2xl font-bold'>
					React State Test Component (use Nanostores)
				</h1>
				<span>Nanostores number : {countNumber}</span>
				<Button onClick={() => countNumberAtom.set(countNumberAtom.get() + 1)}>
					Plus
				</Button>
				<Button onClick={() => countNumberAtom.set(countNumberAtom.get() - 1)}>
					Minus
				</Button>
			</div>
		</div>
	);
};

export default ReactStateTestComponent;
