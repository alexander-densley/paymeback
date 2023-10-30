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
		e.preventDefault()
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
		<div>
			<div className='flex flex-col items-center'>
				<p className='text-4xl mt-12'>Pay me back</p>
				<p className='text-xl mt-4'>Enter names below to start</p>
			</div>

			<div className='flex mt-4 mx-6'>
				<Input
					placeholder='Name'
					value={name}
					className='mr-2 text-base'
					onChange={handleNameChange}
				/>
				<Button onClick={handleAddName}>Add Name</Button>
			</div>
			<div className='mt-4 ml-12'>
				<ul>
					{names.map((name, index) => (
						<div key={index} className='flex'>
							<Button
								className='p-3 h-3 mr-2 bg-red-500 text-white'
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
		</div>
	)
}
