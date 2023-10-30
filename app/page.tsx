'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
	const [names, setNames] = useState<string[]>([])
	const [name, setName] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	const [amounts, setAmounts] = useState<number[]>([])
	const [items, setItems] = useState<string[]>([])
	const [item, setItem] = useState<string>('')
	const [amountError, setAmountError] = useState<boolean>(false)

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
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>
				<Button
					onClick={() => {
						if (name === '') return
						setNames([...names, name])
						setName('')
					}}
				>
					Add Name
				</Button>
			</div>
			<div className='mt-4 ml-12'>
				<ul>
					{names.map((name, index) => (
						<div key={index} className='flex'>
							<Button
								className='p-3 h-3 mr-2 bg-red-500 text-white'
								onClick={() => {
									setNames(names.filter((_, i) => i !== index))
								}}
							>
								-
							</Button>
							<li className='text-lg'>{name}</li>
						</div>
					))}
				</ul>
			</div>

			{/* stuff */}
			<div className='flex mt-4 mx-6'>
				<Input
					placeholder='Amount'
					value={amount}
					className='mr-2 text-base'
					onChange={(e) => {
						if (Number.isNaN(Number(e.target.value))) setAmountError(true)
						else setAmountError(false)
						setAmount(e.target.value)
					}}
				/>
				<Button
					onClick={() => {
						if (amount === undefined || amount === '' || amountError) return
						setAmounts([...amounts, Number(amount)])
						setAmount('')
					}}
				>
					Add Amount
				</Button>
			</div>
			{amountError && <p className='text-red-500'>Please enter a number</p>}
			<div className='mt-4 ml-12'>
				<ul>
					{amounts.map((amount, index) => (
						<div key={index} className='flex'>
							<Button
								className='p-3 h-3 mr-2 bg-red-500 text-white'
								onClick={() => {
									setAmounts(amounts.filter((_, i) => i !== index))
								}}
							>
								-
							</Button>
							<li className='text-lg'>{amount}</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}
