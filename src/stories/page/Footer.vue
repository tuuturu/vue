<template>
	<header class="Footer">
		<div class="centeredContainer">
			<div class="logo">
				<OsloLogo />
			</div>
			<div>
				Oslo Kommune © {{ new Date().getFullYear() }}
			</div>
		</div>
	</header>
</template>

<script>
import OsloLogo from '../assets/OsloLogo'

export default {
	components: {
		OsloLogo
	}
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.Footer {
	border-top: 1px solid $grey;
	padding-top: 16px;
	padding-bottom: 25px;

	font-size: 16px;

	.centeredContainer {
		width: calc(100% - 8rem);
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;

		.logo {
			flex-grow: 1;

			text-align: left;
		}

		> div {
			margin-top: 1em;
			margin-right: 2em;

			@media (max-width: 900px) {
				width: 100%;
			}
		}

		:last-child {
			margin-right: 0;
		}
	}

	.OsloLogo {
		width: 88px;
		height: 46px;
	}
}
</style>
