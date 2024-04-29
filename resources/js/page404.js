import Lenis from 'lenis'


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

