import { FC } from 'react';
import { IMainModalProps } from './IMainModal';

const MainModal: FC<IMainModalProps> = ({ variant, children }) => {
	switch (variant) {
		case 'successes':
			return (
				<div className='bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md' role='alert'>
					<div className='flex'>
						<div className='py-1'>
							<svg className='fill-current h-6 w-6 text-blue-500 mr-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
								<path d='M2.08 15.82a10 10 0 1 1 14.14 0l-7.07-7.07-7.07 7.07z' />
							</svg>
						</div>
						<div>
							<p className='font-bold'>Success alert</p>
							<p className='text-sm'>{children}</p>
						</div>
					</div>
				</div>
			);
		case 'danger':
			return (
				<div className='bg-red-100 border-t-4 border-red-500 text-red-900 rounded-b px-4 py-3 shadow-md' role='alert'>
					<div className='flex'>
						<div className='py-1'>
							<svg className='fill-current h-6 w-6 text-red-500 mr-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
								<path d='M19.07 17.07l-7.07-7.07 7.07-7.07c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-7.07 7.07-7.07-7.07c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l7.07 7.07-7.07 7.07c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l7.07-7.07 7.07 7.07c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41z' />
							</svg>
						</div>
						<div>
							<p className='font-bold'>Error alert</p>
							<p className='text-sm'>{children}</p>
						</div>
					</div>
				</div>
			);
		default:
			return <></>;
	}
};

export default MainModal;
