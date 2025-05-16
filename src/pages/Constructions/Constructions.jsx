import { motion } from 'framer-motion'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	LineChart,
	Line,
} from 'recharts'

const Constructions = () => {
	const constructions = [
		{
			type: 'Билборд 3x6',
			description:
				'Классический формат наружной рекламы. Отлично подходит для размещения на основных магистралях города.',
			specs: {
				size: '3x6 метров',
				visibility: '150-200 метров',
				illumination: 'Внешняя подсветка',
				averageTraffic: '25000 авто/день',
				conversion: '0.8%',
			},
			image:
				'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3',
			averageOTS: 25000,
		},
		{
			type: 'Суперсайт',
			description:
				'Крупноформатная конструкция для максимального охвата аудитории на крупных магистралях и развязках.',
			specs: {
				size: '15x5 метров',
				visibility: '300-400 метров',
				illumination: 'Внутренняя подсветка',
				averageTraffic: '45000 авто/день',
				conversion: '1.2%',
			},
			image: 'https://fossa-electric.com/common/htdocs/upload/fm/8.jpg',
			averageOTS: 45000,
		},
		{
			type: 'Сити-формат',
			description:
				'Конструкция для пешеходных зон и остановок общественного транспорта.',
			specs: {
				size: '1.2x1.8 метров',
				visibility: '50-70 метров',
				illumination: 'Внутренняя подсветка',
				averageTraffic: '15000 пешеходов/день',
				conversion: '2.5%',
			},
			image:
				'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3',
			averageOTS: 15000,
		},
		{
			type: 'Медиафасад',
			description:
				'Светодиодный экран, размещаемый на фасадах зданий. Позволяет транслировать динамический контент.',
			specs: {
				size: 'Различные размеры',
				visibility: '300-500 метров',
				illumination: 'LED-экран',
				averageTraffic: '60000 смешанный/день',
				conversion: '1.8%',
			},
			image:
				'https://lcdtop.ru/wp-content/uploads/2024/10/mediafasad-2-1024x768.jpg',
			averageOTS: 60000,
		},
	]

	const statsData = constructions.map(item => ({
		name: item.type,
		value: item.averageOTS,
	}))

	const distributionData = [
		{ name: 'Центр города', value: 45 },
		{ name: 'Спальные районы', value: 30 },
		{ name: 'Пригород', value: 15 },
		{ name: 'Трассы', value: 10 },
	]

	const trafficTrend = [
		{ month: 'Янв', traffic: 32000 },
		{ month: 'Фев', traffic: 35000 },
		{ month: 'Мар', traffic: 38000 },
		{ month: 'Апр', traffic: 42000 },
		{ month: 'Май', traffic: 48000 },
		{ month: 'Июн', traffic: 52000 },
	]

	const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'
				>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Рекламные конструкции
					</h1>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Анализ эффективности различных типов рекламных конструкций на основе
						реальных данных
					</p>
				</motion.div>

				{/* Графики статистики */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
					{/* График сравнения OTS */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='bg-white rounded-xl shadow-lg p-6'
					>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Среднее OTS по типам
						</h2>
						<div className='h-[300px]'>
							<ResponsiveContainer width='100%' height='100%'>
								<BarChart data={statsData}>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey='value' name='Среднее OTS' fill='#3B82F6' />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</motion.div>

					{/* График распределения по районам */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='bg-white rounded-xl shadow-lg p-6'
					>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Распределение по районам
						</h2>
						<div className='h-[300px]'>
							<ResponsiveContainer width='100%' height='100%'>
								<PieChart>
									<Pie
										data={distributionData}
										cx='50%'
										cy='50%'
										labelLine={false}
										label={({ name, percent }) =>
											`${name} (${(percent * 100).toFixed(0)}%)`
										}
										outerRadius={100}
										fill='#8884d8'
										dataKey='value'
									>
										{distributionData.map((entry, index) => (
											<Cell
												key={`cell-${index}`}
												fill={COLORS[index % COLORS.length]}
											/>
										))}
									</Pie>
									<Tooltip />
									<Legend />
								</PieChart>
							</ResponsiveContainer>
						</div>
					</motion.div>

					{/* График тренда трафика */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className='bg-white rounded-xl shadow-lg p-6 md:col-span-2'
					>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Динамика трафика
						</h2>
						<div className='h-[300px]'>
							<ResponsiveContainer width='100%' height='100%'>
								<LineChart data={trafficTrend}>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='month' />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line
										type='monotone'
										dataKey='traffic'
										name='Средний трафик'
										stroke='#3B82F6'
										strokeWidth={2}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</motion.div>
				</div>

				{/* Список конструкций */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='grid grid-cols-1 md:grid-cols-2 gap-8'
				>
					{constructions.map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className='bg-white rounded-xl shadow-lg overflow-hidden'
						>
							<div className='relative h-64 bg-gray-200'>
								<img
									src={item.image}
									alt={item.type}
									className='w-full h-full object-cover'
									loading='lazy'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
							</div>
							<div className='p-6'>
								<h3 className='text-2xl font-bold text-gray-900 mb-4'>
									{item.type}
								</h3>
								<p className='text-gray-600 mb-4'>{item.description}</p>
								<div className='space-y-2'>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Размер:</span>
										<span className='font-medium'>{item.specs.size}</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Видимость:</span>
										<span className='font-medium'>{item.specs.visibility}</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Освещение:</span>
										<span className='font-medium'>
											{item.specs.illumination}
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Средний трафик:</span>
										<span className='font-medium'>
											{item.specs.averageTraffic}
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Конверсия:</span>
										<span className='font-medium text-green-600'>
											{item.specs.conversion}
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>Среднее OTS:</span>
										<span className='font-medium text-blue-600'>
											{item.averageOTS.toLocaleString()} просмотров/день
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default Constructions
