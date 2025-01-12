import { Accordion } from '@material-tailwind/react';

import { NavArrowDown } from 'iconoir-react';
import { v1 } from 'node_modules/uuid/dist/cjs';

const ReactTestComponent: React.FC<{ contents: string[] }> = (props: {
	contents: string[];
	children?: React.ReactNode;
}) => {
	const generateKey = (pre: any) => {
		return `${pre}_${new Date().getTime()}`;
	};
	console.log('ReactTestComponent', props.contents);

	return (
		<>
			<Accordion defaultValue='react'>
				{props.contents.map((content) => {
					const key = generateKey(content);
					return (
						<Accordion.Item value={content} key={key}>
							<Accordion.Trigger>
								Material Tailwind {content}
								<NavArrowDown className='h-4 w-4 group-data-[open=true]:rotate-180' />
							</Accordion.Trigger>
							<Accordion.Content>{content}</Accordion.Content>
						</Accordion.Item>
					);
				})}
			</Accordion>
			{props.children}
		</>
	);
};

export default ReactTestComponent;
