'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
	const [person, setPerson] = useState<string>('')
	const [people, setPeople] = useState<string[]>([])
	return (
		<div className='flex flex-col lg:w-[800px] mx-8 lg:mx-auto mt-24'>
			<h1 className='text-4xl font-bold text-center'>Pay me back</h1>
			<div className='flex gap-2 mt-16'>
				<Input
					className='w-[280px]'
					placeholder='Enter people'
					value={person}
					onChange={(e) => setPerson(e.target.value)}
				/>
				<Button
					onClick={() => {
						setPeople([...people, person])
						setPerson('')
					}}
				>
					Add
				</Button>
			</div>
			<h2 className='text-2xl font-bold mt-4'>People:</h2>
			<ul>
				{people.map((person) => (
					<li key={person}>{person}</li>
				))}
			</ul>
			<div className='mt-16'></div>
		</div>
	)
}
