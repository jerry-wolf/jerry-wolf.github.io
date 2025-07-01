export default {
	template: `<div>UA: {{ navigator?.userAgent }}</div>`,
	data() {
		return {
			navigator
		}
	}
}
