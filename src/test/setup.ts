import '@testing-library/react'
import '@testing-library/jest-dom'

class IntersectionObserver {
	root: Element | null = null
	rootMargin = '0px'
	thresholds: readonly number[] = []

	observe() {
		return null
	}
	disconnect() {
		return null
	}
	unobserve() {
		return null
	}
	takeRecords() {
		return []
	}
}

global.IntersectionObserver = IntersectionObserver
