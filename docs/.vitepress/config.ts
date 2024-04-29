import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CRUD Tasks',
  description: 'PHP + JavaScript',
  base: '/crud-tasks/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/comenzar/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }      
    ],

    sidebar: [{
      text: 'Comenzar',   // required
      path: '/comenzar/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Introducción', link: '/comenzar/intro' },
        { text: 'Programas', link: '/comenzar/programs' }                 
      ]
    },{
      text: 'PHP',   // required
      path: '/PHP/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: true, 
      items: [
        { text: 'Primeros pasos con PHP', link: '/PHP/new-project' },
        { text: 'Migración, Fábrica y Sembradora', link: '/PHP/migration-factory-seeder' },
        { text: 'Modelo, Controlador y Rutas', link: '/PHP/model-controller-routes' },
        { text: 'Pruebas con Postman', link: '/PHP/try-with-the-postman' }                  
      ]
    },{
      text: 'JavaScript',
      path: '/JavaScript/',
      collapsible: true,
      collapsed: true,      
      items: [
        { text: 'Nuevo Proyecto Vue', link: '/JavaScript/new-project' },
        { text: 'Limpiar el Proyecto', link: '/JavaScript/cleaning-the-project' },        
        { text: 'Crear Rutas', link: '/JavaScript/create-routes' },
        { text: 'Sobre TypeScript', link: '/JavaScript/about-typescript' } 
      ]
    }, {
      text: 'Temas Relacionados', link: '/related-topics'
    }],    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/crud-todo' }
    ],
  }
})