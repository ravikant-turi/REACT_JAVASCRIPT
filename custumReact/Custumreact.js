function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHtml=reactElement.children;
    domElement.setAttribute
}
const reactElement={
    type: 'a',
    props :{
        href:'http://google.com',
        target : '_blank'

    },
    childre :'click me to visit google'
}

const mainContainer=document.querySelector(".root")

customRender(reactElement,mainContainer)



