<template>
	<header class="Header">
		<div class="centeredContainer">
			<div class="header-contents">
				<div class="left AppLogo">
					<span>Tjenesteplattformen</span>
				</div>
				<div class="right">
					<div class="desktop">
						<router-link class="nav-link" :class="{ 'nav-link-active': isActive() }" to="javascript:void(0)">
							Dataplattform
						</router-link>
						<router-link class="nav-link" :class="{ 'nav-link-active': isActive() }" to="javascript:void(0)">
							Informasjonsforvaltning
						</router-link>
						<router-link class="nav-link" :class="{ 'nav-link-active': isActive() }" to="javascript:void(0)">
							Infrastruktur
						</router-link>
						<router-link class="nav-link" :class="{ 'nav-link-active': isActive() }" to="javascript:void(0)">
							Plattform
						</router-link>
						<router-link class="nav-link" :class="{ 'nav-link-active': isActive() }" to="'javascript:void(0)'">
							Utviklerportalen
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	components: {},
	methods: {
		isActive(name) {
			let root = 'name' || this.$route.name

			if (root && root.indexOf('-') !== -1) root = root.split('-')[0]

			return root === name && false
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';
$topbarLinkFontSize: 14px;

.nav-link:hover {
	border-bottom: 3px solid $blue;
	margin-bottom: -3px;
}

.nav-link-active {
	border-bottom: 3px solid #f9c66b !important;
	margin-bottom: -3px;
}

.centeredContainer {
	max-width: 1340px;
	width: calc(100% - 4rem);
	margin: 0 auto;
}

.Header {
	flex-shrink: 0;
	color: black;
	background-color: white;
	border-bottom: 1px solid $grey;

	.header-contents {
		height: 90px;
		width: 100%;
		position: relative;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;

		.left,
		.right {
			display: inline-flex;
		}

		.right {
			.desktop {
				// Fits the content in the top bar. Adjust accordingly.
				display: inline-flex;
				align-items: center;

				> * {
					margin-left: 3em;
				}
			}
			a.nav-link {
				border: none;
				font-size: $topbarLinkFontSize;
				font-weight: 500;
				text-decoration: none;
				white-space: nowrap;
			}
		}
	}
}

.AppLogo {
	min-height: 44px;
	color: inherit;
	margin: 0;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	span {
		font-size: 24px;
		margin: 0;
	}
}
</style>
