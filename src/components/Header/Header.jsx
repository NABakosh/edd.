import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'>
			<div className='container mx-auto px-4'>
				<nav className='flex items-center h-16'>
					<Link to='/' className='text-2xl font-bold text-white mr-12'>
						Edd.
					</Link>

					<div className='flex-1 flex items-center justify-center space-x-8'>
						<Link to='/' className='nav-link'>
							Главная
						</Link>
						<Link to='/constructions' className='nav-link'>
							Рекламные конструкции
						</Link>
						<Link to='/about-ots' className='nav-link'>
							Что такое OTS
						</Link>
						<Link to='/faq' className='nav-link'>
							FAQ
						</Link>
						<Link to='/about' className='nav-link'>
							О нас
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
