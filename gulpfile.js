import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import {src, dest, watch} from 'gulp'

const sass = gulpSass(dartSass)

export function css(done) {
    console.log("Hola Gulp!")
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css'))
    done()
}

export function dev() {
    watch('src/scss/app.scss', css) //Archivo que vigilo, funcion que ejecuto cuando cambia
}