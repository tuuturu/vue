const { series, src, dest } = require('gulp')
const del = require('delete')

function build() {
	return src('src/stories/**/*.vue')
		.pipe(dest('dist/'))
}

function clean(cb) {
	del(['dist/'], cb)
}

exports.build = build
exports.default = series(clean, build)
