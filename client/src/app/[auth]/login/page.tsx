'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginValidationSchema } from './validationSchema';
import axios from 'axios';
import MainModal from '../../common/MainModal';

interface IValue {
	login: string;
	password: string;
}

function LoginForm() {
	const [error, setError] = useState('');
	const [successes, setSuccesses] = useState('');

	const initialValues = {
		login: '',
		password: '',
		remember_me: false,
	};

	const login = async (data: IValue) => {
		setSuccesses('');
		setError('');
		try {
			const res: any = await axios.post('http://localhost:3001/auth/login', data);
			setSuccesses(res.data);
		} catch (err: any) {
			setError(err.response.data);
		}
	};

	const handleSubmit = (values: IValue) => {
		login(values);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
				</div>
				<Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
					{() => (
						<Form className='mt-8 space-y-6'>
							<input type='hidden' name='remember' value='true' />
							<div className='rounded-md shadow-sm -space-y-px'>
								<div className='mb-7'>
									<Field id='login' name='login' type='text' autoComplete='login' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Login' />
									<ErrorMessage name='login' component='div' className='text-red-500 text-sm mt-1' />
								</div>
								<div>
									<Field id='password' name='password' type='password' autoComplete='current-password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Password' />
									<ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-3 text-sm' />
								</div>
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<Field id='remember_me' name='remember_me' type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
									<label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
										Remember me
									</label>
								</div>

								<div className='text-sm'>
									<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
									<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
										<svg className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
											<path fillRule='evenodd' d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
											<path fillRule='evenodd' d='M4 8V6a4 4 0 118 0v2h1a3 3 0 013 3v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a3 3 0 013-3h1z' clipRule='evenodd' />
										</svg>
									</span>
									Sign in
								</button>
							</div>
						</Form>
					)}
				</Formik>

				{!!error && <MainModal variant='danger'>{error}</MainModal>}
				{!!successes && <MainModal variant='successes'>{successes}</MainModal>}
			</div>
		</div>
	);
}

export default LoginForm;
