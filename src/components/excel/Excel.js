import {$} from '@core/dom'

export class Excel {
 constructor(selector, options){
     this.$el = $(selector)
     this.components = options.components || []
 }

 getRoot(){
     const $root =  $.create('div','excel')

        // класс который является наследником от ExcelComponent
     this.components = this.components.map(Component => {
         const $el = $.create('div', Component.className)
         const component = new Component($el)

         $el.html(component.toHTML())
         $root.append($el)
         return component
     })

     return $root
 }

 render(){
     console.log('Основной див приложения (render)',this.$el)
     this.$el.append(this.getRoot())
     this.components.forEach(component => component.init())
 }

}