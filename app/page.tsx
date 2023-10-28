'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
	const [names, setNames] = useState<string[]>([])
	const [name, setName] = useState<string>('')
	const [amount, setAmount] = useState<number>(0)
	const [amounts, setAmounts] = useState<number[]>([0])

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleAddName = () => {
		if (name === '') return
		setNames([...names, name])
		setName('')
	}
	const handleRemoveName = (index: number) => {
		setNames(names.filter((_, i) => i !== index))
	}

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				<p className='text-4xl mt-12'>Pay me back</p>
				<p className='text-xl mt-4'>Enter names below to start</p>
			</div>

			<div className='flex flex-row mt-4'>
				<Input
					placeholder='Name'
					value={name}
					className='mr-2'
					onChange={handleNameChange}
				/>
				<Button onClick={handleAddName}>Add Name</Button>
			</div>
			<div className='mt-2'>
				<ul>
					{names.map((name, index) => (
						<div key={index} className='flex flex-row'>
							<Button
								className='ml-2 p-3 h-3 mr-2'
								onClick={() => {
									handleRemoveName(index)
								}}
							>
								-
							</Button>
							<li className='text-lg'>{name}</li>
						</div>
					))}
				</ul>
			</div>
			<div></div>
		</div>
	)
}
