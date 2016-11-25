const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );

gulp.task(
	'styles',
	() =>
		gulp.src( './styles/src/**/*.css' )
			.pipe(
				postcss(
					[
						require( 'postcss-nesting' ),
						require( 'postcss-calc' )
					]
				)
			)
			.pipe(
				gulp.dest( './styles/' )
			)
);

gulp.task(
	'styles:watch',
	() =>
		gulp.watch( './styles/src/**/*.css', ['styles'] )
);

// node_modules/typescript/lib/tsc

gulp.task(
	'default',
	['styles:watch', 'styles']
);
