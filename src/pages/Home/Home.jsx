import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-3xl mx-auto text-center'
				>
					<h1 className='text-5xl font-bold text-gray-900 mb-6'>
						OTS — Показатель охвата наружной рекламы
					</h1>
					<p className='text-xl text-gray-600 mb-8'>
						Узнайте, как работает наружная реклама и как считается её
						эффективность. Используйте передовые технологии анализа для
						оптимизации ваших рекламных кампаний.
					</p>
					<motion.div
						className='flex justify-center gap-4'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<button
							className='btn-primary'
							onClick={() => navigate('/about-ots')}
						>
							Подробнее об OTS
						</button>
						<button
							className='px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors'
							onClick={() => navigate('/faq')}
						>
							FAQ
						</button>
					</motion.div>
				</motion.div>
			</section>

			{/* Stats Section */}
			<section className='bg-white py-16'>
				<div className='container mx-auto px-4'>
					<motion.h2
						className='text-3xl font-bold text-center text-gray-900 mb-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Что делает наш сервис
					</motion.h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								number: '450 000+',
								text: 'просмотров проанализировано',
								description:
									'Ежедневный анализ эффективности рекламных конструкций',
							},
							{
								number: '100+',
								text: 'рекламных щитов добавлено',
								description: 'Постоянно растущая база рекламных конструкций',
							},
							{
								number: '5',
								text: 'методов оценки эффективности',
								description:
									'Комплексный подход к анализу эффективности рекламы',
							},
							{
								number: '24/7',
								text: 'поддержка клиентов',
								description: 'Профессиональная поддержка на всех этапах работы',
							},
						].map((stat, index) => (
							<motion.div
								key={index}
								className='card p-6'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className='text-4xl font-bold text-blue-600 mb-2'>
									{stat.number}
								</div>
								<div className='text-gray-900 font-semibold mb-2'>
									{stat.text}
								</div>
								<div className='text-gray-600 text-sm'>{stat.description}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<motion.h2
						className='text-3xl font-bold text-center text-gray-900 mb-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Возможности платформы
					</motion.h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								title: 'Интерактивные карты',
								description:
									'Визуализация расположения рекламных конструкций с подробной информацией о каждой точке',
								icon: '🗺️',
							},
							{
								title: 'Аналитика трафика',
								description:
									'Детальный анализ пешеходного и автомобильного потока в разные периоды времени',
								icon: '📊',
							},
							{
								title: 'Прогнозирование',
								description:
									'Предсказание эффективности размещения на основе исторических данных',
								icon: '📈',
							},
							{
								title: 'Отчетность',
								description:
									'Формирование подробных отчетов по эффективности рекламных кампаний',
								icon: '📑',
							},
							{
								title: 'API интеграция',
								description:
									'Возможность интеграции с вашими существующими системами через API',
								icon: '🔄',
							},
							{
								title: 'Мониторинг',
								description:
									'Постоянный контроль эффективности и актуальности данных',
								icon: '👁️',
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								className='card p-6'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className='text-4xl mb-4'>{feature.icon}</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-600'>{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className='container mx-auto px-4 py-16'>
				<motion.h2
					className='text-3xl font-bold text-center text-gray-900 mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Наши тарифы
				</motion.h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{[
						{
							title: 'Базовый',
							price: 'Бесплатно',
							features: [
								'3 рекламные точки',
								'Базовая статистика просмотров',
								'Стандартные отчеты',
								'Email поддержка',
								'Обновление данных раз в неделю',
							],
							isPopular: false,
							buttonText: 'Начать',
						},
						{
							title: 'Продвинутый',
							price: '4 900 ₸',
							period: '/мес',
							features: [
								'До 20 точек',
								'Расширенная аналитика',
								'Доступ к алгоритмам оценки',
								'Отчёты по адресам',
								'Приоритетная поддержка',
								'Ежедневное обновление данных',
								'API доступ',
							],
							isPopular: true,
							buttonText: 'Подключить',
						},
						{
							title: 'Профессиональный',
							price: '8 900 ₸',
							period: '/мес',
							features: [
								'Неограниченные точки',
								'Полный анализ эффективности',
								'Персональные рекомендации',
								'Премиум поддержка 24/7',
								'Интеграция с CRM',
								'Обновление в реальном времени',
								'Расширенный API доступ',
								'Персональный менеджер',
							],
							isPopular: false,
							buttonText: 'Подключить',
						},
					].map((plan, index) => (
						<motion.div
							key={index}
							className={`card ${
								plan.isPopular ? 'border-2 border-blue-600 relative' : ''
							}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{plan.isPopular && (
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
									<span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm'>
										Популярный
									</span>
								</div>
							)}
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>
								{plan.title}
							</h3>
							<ul className='space-y-3 mb-6'>
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className='flex items-center'>
										<svg
											className='w-5 h-5 text-green-500 mr-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M5 13l4 4L19 7'
											/>
										</svg>
										{feature}
									</li>
								))}
							</ul>
							<div className='text-center mb-4'>
								<span className='text-2xl font-bold'>{plan.price}</span>
								{plan.period && (
									<span className='text-gray-600'>{plan.period}</span>
								)}
							</div>
							<button className='w-full btn-primary'>{plan.buttonText}</button>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-blue-600 py-16'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center text-white'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className='text-3xl font-bold mb-4'>
							Готовы начать анализировать эффективность вашей рекламы?
						</h2>
						<p className='text-xl mb-8'>
							Присоединяйтесь к сотням компаний, которые уже используют наш
							сервис
						</p>
						<button
							className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
							onClick={() => navigate('/about')}
						>
							Узнать больше
						</button>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default Home
