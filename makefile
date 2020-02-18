
run:
	@npm run storybook

link-styling:
	@npm link @tuuturu/styling || true
dev:
	@npm run watch

build-package:
	@npm run build
	@cp package.json dist/
build-storybook:
	@npm run build-storybook

publish:
	@npm publish dist/
publish-locally:
	@(cd dist/ && npm link)

clean:
	@rm -rf dist/
	@rm -rf node_modules
