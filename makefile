

build:
	@npm run build
	@cp package.json dist/

publish:
    @npm publish dist/

clean:
	@rm -rf dist/
	@rm -rf node_modules
