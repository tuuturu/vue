

build-package:
	@npm run build
	@cp package.json dist/
build-storybook:
    @npm run build-storybook

publish:
    @npm publish dist/

clean:
	@rm -rf dist/
	@rm -rf node_modules
