import { motion } from 'framer-motion'

const About = () => {
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
					О нашем сервисе
				</motion.h1>

				<motion.div
					className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{/* История компании */}
					<div className='p-8 border-b border-gray-200'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
								История компании
							</h2>
							<p className='text-gray-600 mb-4'>
								Наша компания начала свой путь в 2021 году с идеи сделать
								размещение наружной рекламы более эффективным и прозрачным. Мы
								создали инновационную платформу, которая использует передовые
								технологии для анализа эффективности рекламных конструкций.
							</p>
							<p className='text-gray-600'>
								За это время мы выросли от стартапа до надежного партнера для
								сотен рекламных агентств и компаний. Наша платформа постоянно
								развивается, учитывая потребности клиентов и новые
								технологические возможности.
							</p>
						</motion.div>
					</div>

					{/* Миссия и ценности */}
					<div className='p-8 border-b border-gray-200 bg-gray-50'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
								Миссия и ценности
							</h2>
							<p className='text-gray-600 mb-6'>
								Мы стремимся сделать анализ эффективности наружной рекламы
								доступным и понятным для каждого. Наш сервис предоставляет
								точные данные о потенциальной аудитории рекламных конструкций,
								помогая принимать обоснованные решения в медиапланировании.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										Наши ценности
									</h3>
									<ul className='list-disc list-inside text-gray-600 space-y-2'>
										<li>Инновации и развитие</li>
										<li>Точность и надежность данных</li>
										<li>Клиентоориентированность</li>
										<li>Прозрачность в работе</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										Наши цели
									</h3>
									<ul className='list-disc list-inside text-gray-600 space-y-2'>
										<li>Повышение эффективности рекламы</li>
										<li>Оптимизация рекламных бюджетов</li>
										<li>Развитие рынка наружной рекламы</li>
										<li>Внедрение инновационных решений</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Технологии */}
					<div className='p-8 border-b border-gray-200'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
								Технологии
							</h2>
							<p className='text-gray-600 mb-6'>
								Используем современные методы анализа данных и машинного
								обучения для расчета показателей OTS. Наши алгоритмы учитывают
								множество факторов для обеспечения максимальной точности оценки.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='bg-blue-50 p-4 rounded-lg'>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										Анализ данных
									</h3>
									<ul className='text-gray-600 space-y-2'>
										<li>• Машинное обучение</li>
										<li>• Big Data анализ</li>
										<li>• Предиктивная аналитика</li>
										<li>• Визуализация данных</li>
									</ul>
								</div>
								<div className='bg-green-50 p-4 rounded-lg'>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										Сбор данных
									</h3>
									<ul className='text-gray-600 space-y-2'>
										<li>• GPS-трекинг</li>
										<li>• Камеры подсчета</li>
										<li>• Мобильные данные</li>
										<li>• Датчики движения</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Команда */}
					<div className='p-8 border-b border-gray-200 bg-gray-50'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
								Команда
							</h2>
							<p className='text-gray-600 mb-6'>
								Наша команда состоит из опытных специалистов в области наружной
								рекламы, аналитики данных и разработки программного обеспечения.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								<div className='text-center'>
									<div className='text-4xl mb-2'>👨‍💻</div>
									<h3 className='font-semibold text-gray-900 mb-1'>
										Разработчики
									</h3>
									<p className='text-gray-600 text-sm'>
										Создают инновационные решения
									</p>
								</div>
								<div className='text-center'>
									<div className='text-4xl mb-2'>📊</div>
									<h3 className='font-semibold text-gray-900 mb-1'>
										Аналитики
									</h3>
									<p className='text-gray-600 text-sm'>
										Обрабатывают и анализируют данные
									</p>
								</div>
								<div className='text-center'>
									<div className='text-4xl mb-2'>🎯</div>
									<h3 className='font-semibold text-gray-900 mb-1'>
										Маркетологи
									</h3>
									<p className='text-gray-600 text-sm'>
										Оптимизируют рекламные стратегии
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Достижения */}
					<div className='p-8'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
								Достижения
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										2023 год
									</h3>
									<ul className='text-gray-600 space-y-2'>
										<li>• Запуск API для интеграций</li>
										<li>• Расширение базы до 100+ конструкций</li>
										<li>• Внедрение машинного обучения</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-2'>
										2024 год
									</h3>
									<ul className='text-gray-600 space-y-2'>
										<li>• Новые методы анализа данных</li>
										<li>• Интеграция с CRM системами</li>
										<li>• Выход на международный рынок</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default About
