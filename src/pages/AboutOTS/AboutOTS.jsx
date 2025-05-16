import { motion } from 'framer-motion'

const AboutOTS = () => {
	return (
		<div className='min-h-screen bg-gray-50'>
			<section className='container mx-auto px-4 py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-4xl mx-auto'
				>
					<h1 className='text-4xl font-bold text-gray-900 mb-8'>
						Что такое OTS (Opportunity To See)?
					</h1>

					<div className='prose prose-lg max-w-none'>
						<p className='text-xl text-gray-600 mb-8'>
							OTS (Opportunity To See) - это показатель, который измеряет
							потенциальную аудиторию наружной рекламы. Он показывает, сколько
							людей теоретически могут увидеть рекламное сообщение.
						</p>

						<h2 className='text-2xl font-bold text-gray-900 mt-12 mb-6'>
							Как рассчитывается OTS?
						</h2>

						<div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
							<p className='text-gray-600 mb-4'>
								OTS рассчитывается на основе нескольких факторов:
							</p>
							<ul className='space-y-4'>
								<li className='flex items-start'>
									<svg
										className='w-6 h-6 text-blue-600 mr-3 mt-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
									<span>
										Пешеходный трафик в зоне видимости рекламной конструкции
									</span>
								</li>
								<li className='flex items-start'>
									<svg
										className='w-6 h-6 text-blue-600 mr-3 mt-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
									<span>Автомобильный трафик и скорость движения</span>
								</li>
								<li className='flex items-start'>
									<svg
										className='w-6 h-6 text-blue-600 mr-3 mt-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
									<span>Размер и расположение рекламной конструкции</span>
								</li>
								<li className='flex items-start'>
									<svg
										className='w-6 h-6 text-blue-600 mr-3 mt-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
									<span>Время суток и сезонность</span>
								</li>
							</ul>
						</div>

						<h2 className='text-2xl font-bold text-gray-900 mt-12 mb-6'>
							Почему OTS важен?
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
							<div className='card'>
								<h3 className='text-xl font-bold text-gray-900 mb-4'>
									Для рекламодателей
								</h3>
								<p className='text-gray-600'>
									Помогает оценить потенциальный охват рекламной кампании и
									эффективно распределить бюджет
								</p>
							</div>
							<div className='card'>
								<h3 className='text-xl font-bold text-gray-900 mb-4'>
									Для аналитиков
								</h3>
								<p className='text-gray-600'>
									Предоставляет данные для анализа эффективности различных
									рекламных локаций
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
		</div>
	)
}

export default AboutOTS
