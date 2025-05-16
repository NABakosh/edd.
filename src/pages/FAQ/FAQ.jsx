import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer, index }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.div
			className='border-b border-gray-200'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<button
				className='w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='text-lg font-medium text-gray-900'>{question}</span>
				<svg
					className={`w-6 h-6 transform transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='overflow-hidden'
					>
						<div className='p-6 bg-gray-50'>
							<p className='text-gray-600'>{answer}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

const FAQ = () => {
	const faqItems = [
		{
			question: 'Что такое OTS?',
			answer:
				'OTS (Opportunity To See) - это метрика, которая показывает потенциальное количество людей, которые могут увидеть рекламное сообщение. Это важный показатель для оценки эффективности наружной рекламы.',
		},
		{
			question: 'Как рассчитывается OTS?',
			answer:
				'OTS рассчитывается на основе нескольких факторов: пешеходного и автомобильного трафика, времени суток, расположения конструкции, размера рекламного носителя и других параметров.',
		},
		{
			question: 'Какие типы рекламных конструкций поддерживаются?',
			answer:
				'Наш сервис поддерживает различные типы рекламных конструкций: билборды, ситиборды, суперсайты, остановочные павильоны и digital-экраны.',
		},
		{
			question: 'Как часто обновляются данные?',
			answer:
				'Данные о трафике и эффективности обновляются ежедневно. Статистика по просмотрам агрегируется в режиме реального времени.',
		},
		{
			question: 'Можно ли экспортировать отчеты?',
			answer:
				'Да, в зависимости от тарифного плана вы можете экспортировать отчеты в различных форматах (PDF, Excel). В профессиональном тарифе доступна расширенная аналитика и персональные рекомендации.',
		},
	]

	return (
		<motion.div
			className='min-h-screen bg-gray-50 py-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='container mx-auto px-4'>
				<motion.h1
					className='text-3xl font-bold text-gray-900 mb-8 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Часто задаваемые вопросы
				</motion.h1>
				<motion.div
					className='max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
							index={index}
						/>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}

export default FAQ
