let express = require('express');

let app = express();



let Vue = require('vue');
let fs = require('fs');
// vue 提供的服务端渲染的包
let VueServerRender = require('vue-server-renderer');

let vm = new Vue({
  template: '<div>hello111</div>'
})
let template = fs.readFileSync('./index.html', 'utf-8');
let render = VueServerRender.createRenderer({
  template
})

app.get('/', (req, res) => {
  render.renderToString(vm, function(err, html) {
    res.send(html)
  })
})

app.listen(3000);