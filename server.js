express = require('express')
nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/25744776?s=460&u=719590bb527dd2ed130d29c64b672bc0474d49b8&v=4",
        name: "Fernando Igor",
        role: "Software Developer",
        description: "Desenvolvedor full-stack disposto a aprender novas tecnologias e extrair o melhor delas.",
        links: [
            {name: "GitHub", link: ""},
            {name: "Instagran", link: ""},
            {name: "LinkedIn", link: ""}
        ]
    }
    res.render("about", {about})
})

server.get('/portifolio', (req, res)=>{
    res.render("portifolio", {items: videos})
})

server.listen(5000, ()=>{
    console.log('Server running...')
})