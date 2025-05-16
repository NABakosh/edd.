import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import AboutOTS from './pages/AboutOTS/AboutOTS'
import FAQ from './pages/FAQ/FAQ'
import About from './pages/About/About'
import Constructions from './pages/Constructions/Constructions'

const App = () => {
	return (
		<div className='min-h-screen bg-gray-50'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/constructions' element={<Constructions />} />
					<Route path='/about-ots' element={<AboutOTS />} />
					<Route path='/faq' element={<FAQ />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
