<template>
	<div>UA: {{ navigator?.userAgent }}</div>
</template>
<script>
	export default {
		data() {
			return {
				navigator
			}
		}
	}
</script>
