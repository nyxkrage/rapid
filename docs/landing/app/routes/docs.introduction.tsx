import React from 'react';
import { docsSetup } from '~/helpers';
import { Heading } from '@rapid-web/ui';
import type { LoaderFunction, LinksFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BreadCrumb } from '~/components/BreadCrumb';
import { Outlet } from '@remix-run/react';
import styles from '../styles/markdown.css';

interface LoaderOutput {
	routes: string[];
}

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

export const loader: LoaderFunction = ({ request }) => {
	return docsSetup("introduction", request);
};

const DocsIntroduction = () => {
	const data = useLoaderData<LoaderOutput>();
	return (
		<div className='flex w-full flex-col'>
			<BreadCrumb routes={data.routes} />
			<Heading styles='exclude-from-markdown text-white text-5xl font-bold'>
				Introduction
			</Heading>
			<div className='mt-6 text-white'>
				<Outlet />
			</div>
		</div>
	);
};

export default DocsIntroduction;
