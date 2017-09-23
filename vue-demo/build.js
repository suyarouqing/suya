const fs = require('fs')
let content = fs.readFileSync('./dist/index.html', 'utf-8')

content = `@{
    Layout = null;
}\n\n` + content

content = content.replace('<body>', `<script>
        var openid='@ViewBag.OpenId';
    </script>`)

/**
content = content.replace(/.\/static/g, '"~/Content/_Common/CRM/static')
.replace(/js>/g, 'js">')
.replace(/css rel/g, 'css" rel')
**/

fs.writeFileSync('./dist/Index.cshtml', content)
console.log('Index.cshtml 生成成功')