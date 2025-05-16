import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ContactModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
		// Здесь будет логика отправки формы
		console.log('Form submitted:', formData)
		onClose()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black bg-opacity-50 z-40'
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className='fixed inset-0 z-50 flex items-center justify-center p-4'
					>
						<div className='bg-white rounded-xl shadow-xl max-w-md w-full p-6'>
							<div className='flex justify-between items-center mb-6'>
								<h2 className='text-2xl font-bold text-gray-900'>
									Связаться с нами
								</h2>
								<button
									onClick={onClose}
									className='text-gray-500 hover:text-gray-700 transition-colors'
								>
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
							</div>

							<form onSubmit={handleSubmit} className='space-y-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-gray-700 mb-1'
									>
										Ваше имя
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
										placeholder='Введите ваше имя'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 mb-1'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
										placeholder='your@email.com'
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 mb-1'
									>
										Сообщение
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										required
										rows='4'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none'
										placeholder='Ваше сообщение...'
									/>
								</div>

								<button type='submit' className='w-full btn-primary'>
									Отправить
								</button>
							</form>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default ContactModal
