<template>
	<header class="Header">
		<div class="centeredContainer">
			<div class="header-contents">
				<div class="left AppLogo">
					<a class="nav-link" href="https://oslokommune.github.io/tp-tjenesteplattform/">
						<span>Tjenesteplattformen</span>
					</a>
				</div>
				<div class="right">
					<div class="desktop">
						<a class="nav-link" :class="{ 'nav-link-active': isActive() }" href="https://oslokommune.github.io/tp-dataplattform/">
							Dataplattform
						</a>
						<a class="nav-link" :class="{ 'nav-link-active': isActive() }" href="https://oslokommune.github.io/tp-informasjonsforvaltning/">
							Informasjonsforvaltning
						</a>
						<a class="nav-link" :class="{ 'nav-link-active': isActive() }" href="https://oslokommune.github.io/tp-infrastruktur/">
							Infrastruktur
						</a>
						<a class="nav-link" :class="{ 'nav-link-active': isActive() }" href="https://oslokommune.github.io/tp-plattform/">
							Plattform
						</a>
						<a class="nav-link" :class="{ 'nav-link-active': isActive() }" href="https://oslokommune.github.io/tp-utviklerportalen/">
							Utviklerportalen
						</a>
						<router-link class="nav-link" to="/help">
							<span style="color: red;">⁉️ </span>
							️Hjelp
							<span style="color: red;">⁉️ </span>
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

.nav-link {
	color: $blue-dark;
	font-family: "Oslo Sans", sans-serif;
	cursor: pointer;
	text-decoration: none;
	&:focus, &:hover, &:active, &:visited {
		color: $blue-hover;
		text-decoration: none;
		border-bottom: 2px solid $blue-hover;
	}
}

.nav-link:hover {
	border-bottom: 3px solid $blue !important;
	margin-bottom: -3px;
}

.nav-link-active {
	border-bottom: 3px solid #f9c66b !important;
	margin-bottom: -3px;
}

.centeredContainer {
	width: calc(100% - 8rem);
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
	color: inherit;
	margin: 0;
	cursor: pointer;
	text-decoration: none;

	a {
		border: none;
	}

	&:hover {
		//text-decoration: underline;
	}

	span {
		font-size: 24px;
		margin: 0;
	}
}
</style>
